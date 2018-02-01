import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.productsObservable = this.getProducts('/products');
  }

  getProducts(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  navigateDetail(item){
    console.log(item);
  }

}
