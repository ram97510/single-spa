import React, { useEffect, useState } from "react";
import "./styles.css";

export default function SSR() {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/nxtmeta");

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Rest of your code for handling CSS and JS files
            const linkElements = doc.getElementsByTagName("link");
      const cssUrls = Array.from(linkElements)
        .map((link) => link.getAttribute("href"))
        .filter((href) => href && href.endsWith(".css"));

      for (const cssUrl of cssUrls) {
        const cssResponse = await fetch(new URL(cssUrl, response.url)); 
        const cssCode = await cssResponse.text();
        const styleElement = document.createElement("style");
        styleElement.innerHTML = cssCode;
        document.head.appendChild(styleElement);
      }

      // const manualJsFiles = [
      //   "http://localhost:8080/app/dist/runtime.hot.bundle.js", 
      //   "http://localhost:8080/app/dist/vendor.hot.bundle.js", 
      //   "http://localhost:8080/app/dist/vendor-styles.hot.bundle.js", 
      //   "http://localhost:8080/app/dist/styles.hot.bundle.js", 
      //   "http://localhost:8080/app/dist/app-main.hot.bundle.js"
        
      // ];

      // for (const jsUrl of manualJsFiles) {
      //   const scriptElement = document.createElement("script");
      //   scriptElement.src = jsUrl;
      //   scriptElement.defer = true;
      //   document.head.appendChild(scriptElement);
      //   console.log(`Appended JS file: ${jsUrl}`);
      // }

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
        document.body.appendChild(scriptElement);
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
    fetchData();
  }, []);

  return (
    <div>
    {/* {error ? (
      <Serverdownaiml />
    ) : ( */}
        <div id="root"></div>

        
        {/* <object type="text/html" data="/nxtmeta" width="100%" height="600px" ></object> */}
        {/* <iframe src="https://www.coursera.org/" width="100%" height="600px"></iframe> */}
   
    {/* )} */}
  </div>
  );
}

