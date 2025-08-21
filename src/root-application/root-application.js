
import * as singleSpa from 'single-spa';

import 'regenerator-runtime/runtime';

function setActiveRouteStyle(route) {
  const activeLink = document.querySelector(`[href="${route}"]`);
  if (activeLink) {
    activeLink.classList.add('active'); 
  }
}

function resetInactiveRouteStyles(routes) {
  routes.forEach((route) => {
    const inactiveLink = document.querySelector(`[href="${route}"]`);
    if (inactiveLink) {
      inactiveLink.classList.remove('active'); 
    }
  });
}

function showWhenAnyOf(routes) {
  return function (location) {
    resetInactiveRouteStyles(routes); 
    setActiveRouteStyle(location.pathname); 

    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    resetInactiveRouteStyles(routes); 
    setActiveRouteStyle(location.pathname); 

    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    resetInactiveRouteStyles(routes); 
    setActiveRouteStyle(location.pathname); 

    return routes.every((route) => location.pathname !== route);
  };
}

const userIsLoggedIn = sessionStorage.getItem('access_token') !== null;


const feastAllowedPaths = [
  '/p/my_project' ,
  '/feast'
];

const restrictedfeastRoutes = new Set([
  '/meta',  
  '/',
  // '/feast',
  '/nxtcd',
  '/genai',
  '/nxtml',
  '/workbench',
  '/login',
  '/nifi'
]);

const genaiAllowedPaths = [
  '/genai' ,
  '/canvas',
  '/agentflows',
  '/chatflows',
  '/marketplaces',
  '/tools',
  '/assistants',
  '/credentials',
  '/variables',
  '/apikey',
  '/document-stores'

];

const restrictedgenaiRoutes = new Set([
  '/meta',  
  '/p/credit_score_project',
  '/nxtcd',
  // '/genai',
  '/nxtml',
  '/workbench',
  '/login',
  '/nifi'
]);


const metabaseAllowedPaths = [
  '/analytics',  
  '/collection', 
  '/browse', 
  '/auth/login',
  '/account',
  '/admin',
  '/auto'
];


const restrictedRoutes = new Set([
  '/',
  '/p/credit_score_project',
  '/feast',
  '/nxtcd',
  '/genai',
  '/nxtml',
  '/workbench',
  '/login',
  '/nifi'
]);


if (userIsLoggedIn) {
singleSpa.registerApplication(
  'navbar',
  () => import('../react-sidemenu/index.js'),
  showExcept(['/login']),
);

// singleSpa.registerApplication(
//   'home',
//   () => import('../angular-home/index.js'),
//   showWhenAnyOf(['/']),
// );

// singleSpa.registerApplication(
//   'nxtml',
//   () => import('../react-ssr/index.js'),
//   showWhenAnyOf(['/']),
// );

singleSpa.registerApplication(
  'angular',
  () => import('../react-ssr/index.js'),
  showWhenPrefix(['/nxtml']),
);


singleSpa.registerApplication(
  'workbench',
  () => import('../react-workbench/index.js'),
  showWhenPrefix(['/workbench']),
);

// singleSpa.registerApplication(
//   'genai',
//   () => import('../react-register/index.js'),
//   showWhenPrefix(['/']),
// );

// singleSpa.registerApplication(
//   'reports',
//   () => import('../react-report/index.js'),
//   showWhenPrefix(['/reports']),
// );

// singleSpa.registerApplication(
//   'feast',
//   () => import('../react-feast/index.js'),
//   showWhenPrefix(['/']),
// );

singleSpa.registerApplication(
  'genai',
    () => import('../react-register/index.js'),
  (location) => {

    return (
      location.pathname === '/genai' ||
      genaiAllowedPaths.some((path) => location.pathname.startsWith(path))
    ) && !restrictedgenaiRoutes.has(location.pathname);
  }
);


singleSpa.registerApplication(
  'feast',
  () => import('../react-feast/index.js'),
  (location) => {

    return (
      location.pathname === '/feast' ||
      feastAllowedPaths.some((path) => location.pathname.startsWith(path))
    ) && !restrictedfeastRoutes.has(location.pathname);
  }
);
singleSpa.registerApplication(
  'nxtcd',
  () => import('../react-nxtcd/index.js'),
  showWhenPrefix(['/nxtcd']),
);

// singleSpa.registerApplication(
//   'nxtcd',
//   () => import('../react-nxtcd/index.js'),
//   showWhenPrefix(['/']),
// );

// singleSpa.registerApplication(
//   'nifi',
//   () => import('../react-nifi/index.js'),
//   showWhenPrefix(['/nifi']),
// );


// singleSpa.registerApplication(
//   'workbench',
//   () => import('../react-workbench/index.js'),
//   showWhenPrefix(['/']),
// );

// singleSpa.registerApplication(
//   'workbench',
//   () => import('../react-workbench/index.js'),
//   (location) => {
//     const params = new URLSearchParams(location.search);
//     return (
//       (location.pathname === '/' || location.pathname.startsWith('/workbench')) &&
//       params.get('app') !== 'metabase'
//     );
//   }
// );

// singleSpa.registerApplication(
//   'lab',
//   () => import('../react-workbench/index.js'),
//   (location) => {
//     const params = new URLSearchParams(location.search);
//     return params.get('app') === 'lab';
//   }
// );

singleSpa.registerApplication(
  'metabase',
  () => import('../react-metabase/index.js'),
  (location) => {

    return (
      location.pathname === '/collection/root' ||
      metabaseAllowedPaths.some((path) => location.pathname.startsWith(path))
    ) && !restrictedRoutes.has(location.pathname);
  }
);

// singleSpa.registerApplication(
//   'metabase',
//   () => import('../react-metabase/index.js'),
//   (location) => {
//     const params = new URLSearchParams(location.search);
//     return params.get('app') === 'metabase';
//   }
// );


}
else {
    singleSpa.registerApplication(
      'login',
      () => import('../react-login/index.js'),
      showWhenAnyOf(['/login']),
    );
  }
singleSpa.start();



singleSpa.addErrorHandler((err) => {
  console.log(err);

  // console.log(System.resolve(err.appOrParcelName));
  System.delete(System.resolve(err.appOrParcelName));

  // singleSpa.unloadApplication(err.appOrParcelName, { waitForUnmount: true });
  singleSpa.unloadApplication(err.appOrParcelName);

  let el = document.getElementById("body");
  if (!el) {
      el = document.createElement("div");
      el.id = "body";
  }
  el.innerHTML = "<h1>Unable to load the app</h1>" + "<h4>" + err + "</h4>";
  document.body.appendChild(el);
});
