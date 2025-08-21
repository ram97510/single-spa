import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import Appcomponent from './home/app.component';
// import AngularApp from './main.component';
import Homecomponent from './home/home.component'
// import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [

  // { path:'',component:Appcomponent},
  { path:'app',component:Appcomponent},
  // { path:'',component:AngularApp},
  { path:'home',component:Homecomponent},
  { path:'**',component:Homecomponent},
  // { path: 'login/callback', component: OktaCallbackComponent }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  
  exports: [
    RouterModule
],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
  
 }
