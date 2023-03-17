import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {CurrencyPipe} from "@angular/common";
import {CartService} from "../service/cart.service";
import {OrderService} from "../service/order.service";
import {Order} from "../model/order";
import {UserService} from "../service/user.service";
import {data} from "autoprefixer";
import {User} from "../model/user";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
    >;
  items: Product[] = [];

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService
  ) { }



  //----- calculate total
  get total() {
    let total: number = 0;
    this.items.forEach(product => total = total+product.price)
    return total;
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  sendOrder(items){
    let user: User;
    this.authService.getUserDetails().subscribe(
      data => {
        user = data;
        this.orderService.sendOrder(this.items).subscribe();
        this.clearCart(items)
      }
    )
  }


  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }
}
