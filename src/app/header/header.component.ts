import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartcount: number;
  constructor(
    public productService: ProductService,
    public router: Router
  ) { }

  ngOnInit() {
    // alert();
    this.productService.getCartItemCount().subscribe(
      res =>{
        console.log(res);
        this.cartcount = res;
      },
      error =>{
        console.log(error);
      }
    );
  }

  gotocart(){
    this.router.navigate(['/cart']);
  }

  gotoHome(){
    this.router.navigate(['/']);
  }

}
