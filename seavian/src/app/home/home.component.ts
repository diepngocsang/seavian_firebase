import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase,private router: Router) { }

  ngOnInit() {
    this.productsObservable = this.getProducts('/products');
  }

  getProducts(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  navigateDetail(item){
    // console.log();
    this.router.navigate(['/home', {product: btoa(JSON.stringify(item))}]);
  }

}
