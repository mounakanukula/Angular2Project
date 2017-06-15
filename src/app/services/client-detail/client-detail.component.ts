import {Component, OnInit, Input} from '@angular/core'; //OnInit lifecycle hook interface
import {ClientService} from '../client-service';
import {Client} from '../client';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'client-detail',
  template: `<div *ngIf="client">
<h1> {{client.name}}</h1>
<h3> {{client.des}} </h3>
</div>`

})
export class ClientDetailComponent{
  client:Client;
  constructor(
    private clientService:ClientService,
  private route: ActivatedRoute
  ){}
getClient():void{
      this.route.params
        .switchMap((params:Params)=> this.clientService.getClient(+params['id']))
        .subscribe(client=>this.client=client);

}
  ngOnInit(): void{
    this.getClient();

}

}

