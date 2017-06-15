import{ Injectable } from '@angular/core';
import{Partner} from './partner';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()                              //tells angular to get metadata about service
//metadata specifies that Angular may need to inject other dependencies into this service.
export class PartnerService{
  private headers = new Headers({'Content-Type':'application/json'});
  private partnerUrl='api/PARTNERS';

constructor(
  private http:Http
){}
  getPartners(): Promise<Partner[]> { // a promise is used to make an asynchronous call; which promises to call back when the results are ready.
  //old// return HEROES;
  return this.http.get(this.partnerUrl)
    .toPromise()
    .then(response=>response.json().data as Partner[])// returns a promise and the appcomponent fetches data from this promise.
     .catch(this.handleError);
}
getPartner(id:number):Promise<Partner>{
  const url=`${this.partnerUrl}/${id}`
  return this.http.get(url)
    .toPromise()
    .then(response=>response.json().data as Partner)
    .catch(this.handleError);
}
update(partner:Partner):Promise<Partner>{
    const url=`${this.partnerUrl}/${partner.id}`;
  return this.http.put(url, JSON.stringify(partner), {headers:this.headers})
    .toPromise()
    .then(()=> partner )
    .catch(this.handleError);

}
create(name:string): Promise<Partner>{
    return this.http
      .post(this.partnerUrl,JSON.stringify({name:name}),{headers:this.headers})
      .toPromise()
      .then(res=>res.json().data as Partner)
      .catch(this.handleError);

}
delete(id: number): Promise<void> {
  const url = `${this.partnerUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
private handleError(error:any): Promise<any>{
  console.error("An error occured", error);
  return Promise.reject(error.message||error);
}
}
