import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from './home/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import AngularApp from './main.component';
import Appcomponent from './home/app.component';
import Homecomponent from './home/home.component';

// import { OAuthModule } from 'angular-oauth2-oidc';

enableProdMode()
  
// import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
// import { OktaAuth } from '@okta/okta-auth-js';

// const oktaAuth = new OktaAuth({
//   issuer: 'https://dev-26955736.okta.com/oauth2/default',
//   clientId: '0oaavdyhws3mrCRIm5d7',
//   redirectUri: window.location.origin + '/login/callback'
// });



@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // OAuthModule.forRoot()
    // OktaAuthModule.forRoot({ oktaAuth })

  ],
  providers: [
    // AuthService
  ],
  declarations: [
    AngularApp,
    Appcomponent,
    Homecomponent
  ],
  bootstrap: [AngularApp]
})
export default class MainModule {
}
