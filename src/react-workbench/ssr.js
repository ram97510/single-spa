// ssr.js
import React, { useEffect, useState } from "react";
import Serverdownaiml from "../serverdown-page/serverdown_aiml";
import "./styles.css";

export default function SSR() {
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const fetchData = async () => {
    try {
      // Load Jupyter resources first 
      if (window.loadJupyterResources) {
        await window.loadJupyterResources();
      }
      
      const response = await fetch("/lab");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Inject CSS
      const cssUrls = Array.from(doc.getElementsByTagName("link"))
        .map((link) => link.getAttribute("href"))
        .filter((href) => href && href.endsWith(".css"));
      
      for (const cssUrl of cssUrls) {
        const cssResponse = await fetch(new URL(cssUrl, response.url));
        const cssCode = await cssResponse.text();
        const styleElement = document.createElement("style");
        styleElement.innerHTML = cssCode;
        document.head.appendChild(styleElement);
      }
      
      // const scriptElements = doc.getElementsByTagName("script");
      // const jsUrls = Array.from(scriptElements)
      //   .map((script) => script.getAttribute("src"))
      //   .filter((src) => src && src.endsWith(".js") && !src.includes('main.')); // Skip main.js since we already loaded it

      // for (const jsUrl of jsUrls) {
      //   const jsResponse = await fetch(new URL(jsUrl, response.url)); 
      //   const jsCode = await jsResponse.text();
      //   const scriptElement = document.createElement("script");
      //   scriptElement.innerHTML = jsCode;
      //   scriptElement.async = false;
      //   // document.body.appendChild(scriptElement);
      // }

      const myDiv = document.getElementById("root");
      myDiv.innerHTML = html;
    } catch (error) {
      console.error("❌ Error in fetchData:", error);
      setError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    setIsMounted(true);
    // fetchData();
    
    return () => {
      setIsMounted(false);
      // Clean up when component unmounts
      // if (window.unloadJupyterResources) {
      //   window.unloadJupyterResources();
      // }
    };
  }, []);

  return (
    <div>
      {error ? (
        <Serverdownaiml />
      ) : (
        // <div id="root"></div>
         <iframe src="http://172.16.0.18:8899/api/jupyter/lab" width="100%" height="650px"></iframe>
          // <object type="text/html" data="http://localhost:8899/api/jupyter/lab?token=9d05954cbd5565ba74d92a7f35003826a8432ac6ee6acf84" width="100%" height="650px"></object>
      )}
    </div>
  );
}