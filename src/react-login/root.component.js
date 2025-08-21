import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './styles.css';
import Apps from "./Apps";
import App from "./App";

export default function Root() {
   
    return (
        // <div>

          // <Apps />
        // </div>
      // <Router>
      //     <Route exact path="/login" component={Apps} />
      // </Router>
    //   <Router>
    //   <Switch>
    //     <Route exact path="/" component={Apps} />
    //     <Route path="/login" component={Apps} />
    //     <Route path="/app" component={App} />
        
    //   </Switch>
    // </Router>
    <Router>
    <Apps />
  </Router>
    );
}

// src/Root.js
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import User from './User';

// function Root() {
//   return (
//     <Router> {/* Wrap your application in a Router */}
//       <div>
//         <h1>My Single-spa-React App</h1>
//         <User />
//       </div>
//     </Router>
//   );
// }

// export default Root;

