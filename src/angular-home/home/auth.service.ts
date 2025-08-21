import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { map } from 'rxjs/operators';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  // userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  // jwtHelper = new JwtHelperService();

  // constructor(private http: HttpClient, private route: Router){
  //   this.loadUserInfo();
  // }

  // loadUserInfo() {
  //   const userdata = this.userInfo.getValue();
  //   if(!userdata){
  //     const accessToken = sessionStorage.getItem("access_token");
  //     if(accessToken){
  //       const decryptedUser = this.jwtHelper.decodeToken(accessToken);

  //       const data = {
  //         access_token: accessToken,
  //         refresh_token: sessionStorage.getItem("refresh_token"),
  //         username: decryptedUser.username,
  //         email: decryptedUser.email,
  //         userid: decryptedUser.sub,
  //         tokenExpiration: decryptedUser.exp
  //       };
  //       this.userInfo.next(data);
  //     }
  //   }
  // }

  // userLogin(userPayload: any): Observable<boolean> {
  //   return this.http.post("http://localhost:3000/auth/login", userPayload).pipe(map((value: any) => {
  //     if (value) {
        
  //       sessionStorage.setItem("access_token", value.access_token);
  //       sessionStorage.setItem("refresh_token", value.refresh_token);

  //       const decryptedUser = this.jwtHelper.decodeToken(value.access_token);
  //       const tokenExpiration = new Date(decryptedUser.exp * 1000);

  //       const currentTime = new Date();
  //       const timeUntilExpiration = tokenExpiration.getTime() - currentTime.getTime();
        
  //       setTimeout(() => {
  //         this.logout(); 
  //         this.route.navigate(['/app']); 
  //       }, timeUntilExpiration);

  //       return true;
  //     }
  //     return false;
  //   }));
  // }

  // logout() {
  //   console.log("logout");
  //   sessionStorage.removeItem("access_token");
  //   sessionStorage.removeItem("refresh_token");
  //   this.route.navigate(['/app']);
  // }
}
