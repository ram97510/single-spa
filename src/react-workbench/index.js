import React from 'react'
import ReactDOM from 'react-dom'
import NxtDataPlatform from 'single-spa-react'
import Root from './root.component.js'
import '@babel/polyfill';


const reactLifecycles = NxtDataPlatform({
  React,
  ReactDOM,
  rootComponent: Root,
  // domElementGetter,
  domElementGetter: () => document.getElementById('react-workbench'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log(err);
    console.log("Exception in Workbench Page");
    return null;
},
})

// export const bootstrap = props => reactLifecycles.bootstrap(props)

// export const mount = props => reactLifecycles.mount(props)

// export const unmount = props => reactLifecycles.unmount(props)

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = async (props) => {
  // Ensure resources are loaded before mounting
  await reactLifecycles.mount(props);
}

export const unmount = async (props) => {
  // Clean up resources when unmounting
  await reactLifecycles.unmount(props);
  if (window.unloadJupyterResources) {
    window.unloadJupyterResources();
  }
}