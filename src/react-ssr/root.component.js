import "./styles.css";
import SSR from "./ssr";
import React, { useEffect } from 'react';

function Root() {

  return (
    <div id="layout-app">
      <SSR />
    </div>
  );
}

export default Root;

