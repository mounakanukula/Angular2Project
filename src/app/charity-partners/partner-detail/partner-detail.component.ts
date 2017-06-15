import { Component, OnInit, Input} from '@angular/core';
import{Partner} from '../partner';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PartnerService} from '../partner-service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls:['./partner-detail.component.css']
})

export class PartnerDetailComponent implements OnInit{
  editPartner:Partner;
  constructor(
  private route:ActivatedRoute,
  private location:Location,
  private partnerService:PartnerService,
  )
  {}
  ngOnInit():void{
    this.route.params
    .switchMap((params:Params)=> this.partnerService.getPartner(+params['id']))
      .subscribe((partner:Partner) =>this.partner= partner);
  }
  goBack():void{
    this.location.back(); //navigates on step backwards using location service
  }
  toEdit(partner:Partner):void{
    this.editPartner=partner;
  }
  save():void{
    this.partnerService.update(this.partner)
      .then(()=>this.goBack());
  }
  @Input() partner:Partner;// input property recieves the input value and binds it to the hero property with its template
  //Input decorator enables property binding; tells Angular that the property is public and available for binding by parent component

}
