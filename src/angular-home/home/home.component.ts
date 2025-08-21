import { Component, OnInit} from '@angular/core'
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'home-component',
  template: `
		<div>
    <!-- <h1 style="text-align:center; padding-bottom:50px; ">Welcome to Home</h1> -->

    <!-- <img [src]="imageUrl" alt="Image" style = " font-family: Poppins; height:130px; width:110px;  margin-left:20%"> -->
    <img src="https://miro.medium.com/v2/resize:fit:1027/1*WFRNSZBO45DyjsXRFqmHqg.png" style="position:absolute; top:0; left:0; right:0; bottom:0; margin:auto;" height="400px" alt="home_img">


   <!-- <ul>
        <li>username- {{user.username}}</li>
        <li>userId- {{user.id}}</li>
        <li>mail id- {{user.email}}</li>
    </ul>
    <button (click)="logout()">Logout</button> -->
    </div>  
	`,
})
// export default class Appcomponent {
  export default class Appcomponent implements OnInit{

    imageUrl = '/images/intenselogo.png';
  //  constructor(private authService:AuthService, private route:Router) {}
   user = {
    username:'',
    id:'',
    email:''
  };

  public ngOnInit(): void {
  //   this.authService.userInfo.subscribe(value => {
  //     if(value){
  //       this.user.id = value.userid;
  //       this.user.username = value.username;
  //       this.user.email = value.email;
  //     }
  //   })
  // }
  //  logout(){
    // this.authService.logout();
   }

   
}