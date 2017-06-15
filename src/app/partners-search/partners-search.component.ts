import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { PartnerSearchService } from './partners-search.service';
import { Partner } from '../charity-partners/Partner';
@Component({
  selector: 'partner-search',
  templateUrl: './partners-search.component.html',
  styleUrls: [ './partners-search.component.css' ],
  providers: [PartnerSearchService]
})
export class PartnerSearchComponent implements OnInit {
  partners: Observable<Partner[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private partnerSearchService: PartnerSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.partners = this.searchTerms
      .debounceTime(100)        // wait 100ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.partnerSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Partner[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Partner[]>([]);
      });
  }
  gotoDetail(partner: Partner): void {
    let link = ['/detail', partner.id];
    this.router.navigate(link);
  }
}
