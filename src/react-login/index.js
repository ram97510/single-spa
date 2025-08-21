import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component.js'
// import User from './User';
// import '@babel/polyfill';

// const domElementGetter = () => {
//   let el = document.getElementById('react-openid')
//   if (!el) {
//     el = document.createElement('div')
//     el.id = 'react-openid'
//     document.body.appendChild(el)
//   }

//   return el
// }

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // domElementGetter,
  domElementGetter: () => document.getElementById('react-login'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log(err);
    console.log("Exception in Login Page");
    return null;
},
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
