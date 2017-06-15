import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {PartnerDetailComponent} from './charity-partners/partner-detail/partner-detail.component';
import {CharityPartnersComponent} from './charity-partners/charity-partners.component';
import {PartnerSearchComponent} from './partners-search/partners-search.component';
import {LoginRoutingModule }      from './login/login-routing.module';
import {LoginComponent} from './login/login.component';
import {PartnerService} from './charity-partners/partner-service';
import {ClientService}from './services/client-service'
import { AuthGuard }            from './auth-guard.service';
import {ServicesComponent} from './services/services.component';
import {ClientDetailComponent} from './services/client-detail/client-detail.component';

import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryData} from './in-memory-data';


@NgModule({
  imports: [ BrowserModule,
  Ng2Bs3ModalModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryData),
    RouterModule.forRoot([
      {path: 'charity-partners', component: CharityPartnersComponent, canActivate:[AuthGuard]},
      {path: 'services' ,component: ServicesComponent},
      {path: '', redirectTo:'/services',pathMatch:'full'},
      {path:'detail/:id', component:PartnerDetailComponent}, //id is a parameter to which the route is configured
      {path:'login', component:LoginComponent},
      {path:'client/:id', component:ClientDetailComponent}
    ])],
  declarations: [ AppComponent,
                   PartnerDetailComponent,
                    CharityPartnersComponent,
                     LoginComponent,
                    ServicesComponent,
                    ClientDetailComponent,
                    PartnerSearchComponent],
  providers:[PartnerService,
             ClientService],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
