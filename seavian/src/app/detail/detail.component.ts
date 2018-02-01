import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnDestroy {
  public item:  any;
  private sub: any;

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.item = params.product;
      this.item = JSON.parse(this.item);
      console.log(this.item);
   });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
