import {Component, OnInit} from '@angular/core'; //OnInit lifecycle hook interface
import {PartnerDetailComponent} from './partner-detail/partner-detail.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Partner} from './partner';
import {PartnerService} from './partner-service';
import {AuthGuard} from '../auth-guard.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'charity-partners',
  templateUrl: './charity-partners.component.html' ,
  styleUrls: ['./charity-partners.component.css'] ,
  providers: [PartnerService]// HeroService is instantiated when AppComponent is created ; AppComponent and its child components can use this service
})
export class CharityPartnersComponent implements OnInit{ //OnInit interface is implemented
  partners: Partner[];
  selectedPartner:Partner;
  addPartner:Partner;
  constructor(
    private partnerService: PartnerService,
    private route: ActivatedRoute,
    private router: Router,
    private authGuard: AuthGuard,
    private authService: AuthService
  )
{ }
  getPartners():void{
  //old//  this.heroes=this.heroService.getHeroes(); (Here this.heroes is set to an array of heroes
    this.partnerService.getPartners().then(partners => this.partners=partners);// a call back function is passed as an argument in then() method0
  }
  ngOnInit():void{
    this.getPartners();//ngOnInit method initializes by calling getHeroes
    //This lifecycle hook method is used to call getHeroes and fetch the data with no issues
  }
  onSelect(partner:Partner): void {
    this.selectedPartner=partner;
    this.router.navigate(['/detail', partner.id]);

  }
  add(name:string):void{
    name=name.trim();
    if(!name){return;}
    this.partnerService.create(name)
      .then(partner=>{
        this.partners.push(partner);
        this.selectedPartner=null;
      })
  }
delete(partner:Partner):void{
this.partnerService
      .delete(partner.id)
      .then(() => {
        this.partners = this.partners.filter(p => p !== partner);
        if (this.selectedPartner === partner) { this.selectedPartner = null; }
      });
}

}


//All components and directives in Angular have a lifecycle which angular creates, renders and destroys.
//Angular calls lifecycle hook methods on directive/component as it creates, changes and destroys them
//each component has a lifecycle, angular creates it, renders it, checks it when any data-bound properties change and detroys it before removing from DOM
//lifecycle hooks in angular provide visibility to these key moments and act when they occur.
//lifecycle hoot interfaces are used to act on key moments in the lifecycle; each lifecycle interface has a lifecycle method
// (eg: ngOnInit() hook method is for OnInit interface and it is called shortly after creating component
//Not all the lifecycle hook methoda are implemented in directive or component

// injected HeroService and held it in a private heroService field
// tells angular to supply an instance of HeroService
//constructor is only for simple initializations like wiring constructor paramters to properties; dont add complex logic inside the contructor and make it complicated

//An arrow function is defined in the callback and this.heroes refers to the heroes property.
// promises are used to create an asynchronous technique and coordinated the view with response.
//Arrow Functions have shorter syntax and are best suited for non-method functions; they can never be used as a constructor;doesn't bind its own to this or arguments.
