import {Component} from '@angular/core';
import {CharityPartnersComponent} from './charity-partners/charity-partners.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service'
@Component({
  selector: 'my-app',
  template: `<div>
<nav class="navbar navbar-default" class="bg-primary text-white">
<div>
<img class="img-fluid" src="http://www.charitydynamics.co.uk/charity-mailings-images/marketing-for-charities.jpg" width="200" height="150" alt="logo">
</div>
<div class="container-fluid">
    <div class="navbar-header">
    <div>
    <h1 class="text-center"> {{title}}</h1>
    <small>
 <h4 > {{caption}}</h4>
 </small>
 <div class="font">
 <i class="icon-append fa fa-facebook-official" aria-hidden="true"></i>
 <i class="fa fa-google-plus-square" aria-hidden="true"></i>
 <i class="fa fa-linkedin-square" aria-hidden="true"></i>
 <i class="fa fa-twitter-square" aria-hidden="true"></i>

 </div>
    </div>
 </div>
 </div>
 </nav>
 <nav class="navbar navbar-default" class="bg-danger">
 <div class="container">
 <nav>
  <a routerLink="/services" routerLinkActive="active"> Services </a>
   <a routerLink='/charity-partners' routerLinkActive="active" (click)="modal.open()" >  
   Charity Partners
   <div > 
<modal #modal>
    <modal-header [show-close]="true">
        <h3> Login needed!!!</h3>
    </modal-header>
    <modal-body>
Please Login to View <strong> Charity Partners </strong>
    </modal-body>
   
</modal>
</div>
   </a>
   <a routerLink="/login" routerLinkActive="active"> Login </a>
   </nav>
   </div>
   </nav>
   <router-outlet></router-outlet>
 
 
 <!--<my-heroes> </my-heroes>-->
 </div>`,
  styles:[`
nav a {
    margin: 0px 100px 0px 40px;
    padding: 20px;
    width:230px;
  text-decoration: none;
  display: inline-block;
  font-family: "Technical", serif;
  font-size: 26px;
}

h1{
      position: absolute;
    top: 0.3em;
    left: 4em;
    font-size:60px;
    font-family: "Technical", serif;
    color: #EC7070;
 font-style: Italic;
}
h4{
      position: absolute;
    left: 11em;
    top: 3em;
    font-size: 32px;
    font-family: "Technical", serif;
    font-style: italic;
    
}
.font{
    font-size: 3.5em;
    position: absolute;
    right: 4em;
    top: 1.5em;
}
`]
})
  export class AppComponent {
    constructor(
      private authService:AuthService
    ){}
    title='Global Cause';
    caption='Change is needed';

  }


