import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[NgbCarouselConfig]
})
export class DetailComponent implements OnInit,OnDestroy {
  public item:  any;
  private sub: any;

  
  constructor(private route: ActivatedRoute,config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.item = atob(params.product) ;
      this.item = JSON.parse(this.item);
      console.log(this.item);
   });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
