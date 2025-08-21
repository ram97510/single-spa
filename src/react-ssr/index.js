import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component.js'
import '@babel/polyfill';

// const domElementGetter = () => {
//   let el = document.getElementById('ssr')
//   if (!el) {
//     el = document.createElement('div')
//     el.id = 'ssr'
//     document.body.appendChild(el)
//   }

//   return el
// }

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // domElementGetter,
  domElementGetter: () => document.getElementById('react-ssr'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log(err);
    console.log("Exception in AI ML Page");
    return null;
},
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
