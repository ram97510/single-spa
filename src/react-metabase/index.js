import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component.js'
import '@babel/polyfill';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // domElementGetter,
  domElementGetter: () => document.getElementById('react-metabase'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log(err);
    console.log("Exception in Workbench Page");
    return null;
},
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
