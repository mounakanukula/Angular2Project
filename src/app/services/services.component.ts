import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {ClientService} from './client-service';
import {Router} from '@angular/router';

@Component({
  selector:'my-services',
  templateUrl: './services.component.html',
  styleUrls:['./services.component.css']

})

export class ServicesComponent implements OnInit {

  clients: Client[];
   selectedClient: Client;
  constructor(
    private clientService: ClientService,
  ) {
  }

  getClients(): void {
    this.clientService.getClients().then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }
 /* onPick(client:Client):void{
    this.selectedClient=client;
  }*/
}

























