import React, { useEffect, useState } from "react";
import Serverdown from "../serverdown-page/serverdown_aiml";

export default function SSR() {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/nxtdataintegration");

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");


      const scriptElements = doc.getElementsByTagName("script");
      const jsUrls = Array.from(scriptElements)
        .map((script) => script.getAttribute("src"))
        .filter((src) => src && src.endsWith(".js"));

      for (const jsUrl of jsUrls) {
        const jsResponse = await fetch(new URL(jsUrl, response.url)); 
        const jsCode = await jsResponse.text();
        const scriptElement = document.createElement("script");
        scriptElement.innerHTML = jsCode;
        scriptElement.async = true;
        // document.body.appendChild(scriptElement);
        console.log(`Retrieved JS file: ${jsUrl}`);
      }

      
      const myDiv = document.getElementById("root");
      myDiv.innerHTML = html;
      console.log("Check 1");
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);


    
    const hideNifiLogo = () => {
      const Nifi = document.getElementById("nifi");
  
      if (Nifi) {
        Nifi.onload = () => {
          try {
            const nifiDoc = Nifi.contentDocument || Nifi.contentWindow.document;
            const style = nifiDoc.createElement("style");
            style.innerHTML = `#message-pane { display: none !important; }`;
            nifiDoc.head.appendChild(style);

          } catch (err) {
            console.error("Failed to nifi CSS:", err);
          }
        };
      }
    };
  
    useEffect(() => {
      hideNifiLogo();
    }, []);

  return (
    <div>
    {error ? (
      <Serverdown />
    ) : (
      <div>
        <object id="nifi" type="text/html" data="/nxtdataintegration" width="100%" height="650px" >
          {/* <div id="root"></div> */}
        </object>
      </div>
    )}
  </div>
  );
}