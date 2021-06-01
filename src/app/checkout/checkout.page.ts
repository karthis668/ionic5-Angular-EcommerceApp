import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  billing = false;
  shipping = false;
  selectpayment = false;
  address = 'Billing Address';


  billingForm = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });

  shippingForm = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });


  constructor(
    public productservice: ProductService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  billingcontinue(){
    this.address = 'Shipping Address';
    this.billing = ! this.billing;
    console.log(this.billingForm.value);
    console.log(this.billing);
    this.shipping = !this.shipping;
    console.log(this.shipping);
  }

  shippingContinue(){
    this.address = 'Select Payment Method';
    this.billing = ! this.billing;
    this.shipping = ! this.shipping;
    this.selectpayment = ! this.selectpayment;

    console.log(this.shippingForm.value);
    console.log(this.billing);

  }

  ordersucces(){
    this.productservice.claercart();
    this.router.navigate(['/success']);
  }

}
