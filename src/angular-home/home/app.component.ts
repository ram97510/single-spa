import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import { Router } from '@angular/router';
// import { AuthService } from './auth.service';

@Component({
  selector: 'app-component',
  template: `
		<div class="full_form" style="margin-top:0px; text-align: center;">
    <h4>Login Form</h4>
  <form >
      <div class="form_group" style="margin-bottom : 10px;">
        <label for="Username1">Username : </label>
        <input type="text" [(ngModel)]="loginData.username" name="username"  placeholder="Username" style="height:30px; width:250px; margin-left:20px; text-align: center;">
      </div>
      
      <div class="form_group " style="margin-bottom : 10px;">
        <label for="Password1">Password : </label>
        <input type="text" [(ngModel)]="loginData.password" name="password" placeholder="Password" style="height:30px; width:250px; margin-left:20px; text-align: center;">
      </div>
      <div class="btn-sub" style="margin-top : 30px; text-align: center;" >
        <button type="submit" (click)="userLogin()" style="height:30px; width:60px; margin-left:100px; text-align: center;" >Login</button>
      </div>
      
    </form>
    
</div>  
	`,
})
export default class Appcomponent {

   loginData :any = {
    username :'',
    password :''
  };

  //  constructor(private authService:AuthService, private route:Router) {}

   userLogin(){

  //   console.log(this.loginData);
  //   // this.authService.userLogin(this.loginData);
  //   // alert("user logged in successfully")
  //   // this.route.navigate(['/home']);

  //   this.authService.userLogin(this.loginData).subscribe((value:boolean) => {
  //     if(value){
  //       this.route.navigate(['/home']);
  //     }
  //     else{
  //       alert("failed");
  //     }
    }
  //   )
  //  }
   
   
}