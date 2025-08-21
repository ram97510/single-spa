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
  domElementGetter: () => document.getElementById('react-feast'),
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
