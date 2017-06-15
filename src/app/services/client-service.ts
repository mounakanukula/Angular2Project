import{Injectable} from '@angular/core';
import{Client} from './client';
import {CLIENTS} from './mock-clients'


@Injectable()
export class ClientService {

  getClients(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }

  getClient(id: number): Promise<Client> {
    return this.getClients()
      .then(clients => clients.find(client => client.id === id));
  }
}

