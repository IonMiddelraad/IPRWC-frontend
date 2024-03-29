import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {OrderService} from "../service/order.service";
import {Order} from "../model/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderList: Order[];

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadAllOrders()
  }

  loadAllOrders() {
    this.orderService.loadOrders().subscribe(
      data => {
        this.orderList = data['payload'];
      }, error => {
        console.log("Something went wrong! " + error)
      }
    )
  }
}
