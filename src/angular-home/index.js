// import 'zone.js'
// import 'reflect-metadata'
// import { singleSpaAngular } from 'single-spa-angular'
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
// import mainModule from './main-module.ts'

// const domElementGetter = () => {
//   let el = document.getElementById('angular')
//   if (!el) {
//     el = document.createElement('div')
//     el.id = 'angular'
//     document.body.appendChild(el)
//   }

//   return el
// }

// const ngLifecycles = singleSpaAngular({
//   domElementGetter,
//   mainModule,
//   angularPlatform: platformBrowserDynamic(),
//   template: `<AngularApp />`
// })

// export const bootstrap = props => ngLifecycles.bootstrap(props)

// export const mount = props => ngLifecycles.mount(props)

// export const unmount = props => ngLifecycles.unmount(props)

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import 'zone.js/dist/zone';
import 'reflect-metadata';
import { NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

import mainModule from './main-module.ts'

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      mainModule,
    );
  },
  template: '<AngularApp />',
  Router,
  NavigationStart,
  NgZone,
  mainModule,
  domElementGetter: () => document.getElementById('angular-app')
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;