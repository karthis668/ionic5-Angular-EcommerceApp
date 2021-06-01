import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  orderId: any;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.orderId  = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  }

  home(){
    this.router.navigate(['/home']);
  }

  getRandomNumber() {
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
}

}
