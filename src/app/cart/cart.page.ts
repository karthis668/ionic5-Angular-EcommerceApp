import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products: any;
  total: any;

  constructor(
    public productService: ProductService,
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
   const items = this.productService.getcartitems();
   console.log(items);
   this.products = items;
   this.total = this.getTotal();
  }

  addproduct(id){
    // alert(id);
    this.productService.addProduct(id);
    this.total = this.getTotal();
    }

    decreaseitem(id){
      this.productService.decreaseProduct(id);
      this.total = this.getTotal();
    }

    gotocheckout(){
      console.log(this.products);
      if(this.products !== 0){
        this.router.navigate(['/checkout']);
      }
      else{
       this.presentToast();
      }

    }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Please add items to the Cart.',
        duration: 2000
      });
      toast.present();
    }

    getTotal() {
       const total = this.products.reduce((i, j) => i + j.price * j.pcount, 0);
       console.log(total);
       return total;
    }

}
