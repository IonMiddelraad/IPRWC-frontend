import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-deleteOrder',
  templateUrl: 'deleteOrder.component.html'
})
export class DeleteOrderComponent implements OnInit {

  orderList: Order[];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadAllOrders()
  }

  deleteOrder(order: Order){
    this.orderService.deleteOrder(order.id).subscribe();
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
