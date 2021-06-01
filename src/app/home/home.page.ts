/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[];

  constructor(
    public productService: ProductService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.products = this.productService.products;
  }

  addproduct(id){
  // alert(id);
  this.productService.addProduct(id);
  }

  decreaseitem(id){
    this.productService.decreaseProduct(id);
  }

  gotocart(){
    this.router.navigate(['/cart']);
  }



}
