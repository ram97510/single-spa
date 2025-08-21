// import { Component, ChangeDetectorRef, Inject, Injectable } from '@angular/core'
// import e from '../event-bus'
import { Component, Inject, Injectable, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'AngularApp',
  template: `
		<div style="margin-top: 0px;">
    <!-- <h1 class="text-primary" >Angular Page</h1>
     <p>{{message}}</p>
    <h5>{{mess}}</h5> -->
    
      <!-- <a routerLink="/angular">Go To Home</a> -->
      <router-outlet></router-outlet>   

		</div>
	`,
})

@Injectable({
  providedIn: 'root',
})

export default class AngularApp implements OnInit{
  
  public ngOnInit(): void {
   
  }

  
  // message: string = "Message from React should appear here";
  // mess : string = 'hello'

  // constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}

  // ngAfterContentInit() {
  //   e.on('message', message => {
  //     this.message = message.text
  //     this.changeDetector.detectChanges()
  //   }),
  //   e.on('mess', mess => {
  //     this.mess = mess.text
  //     this.changeDetector.detectChanges()
  //   })
  // }

}