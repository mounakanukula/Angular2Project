import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Partner }  from '../charity-partners/partner';
@Injectable()
export class PartnerSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Partner[]> {
    return this.http
               .get(`app/PARTNERS/?name=${term}`)
               .map(response => response.json().data as Partner[]);
  }
}