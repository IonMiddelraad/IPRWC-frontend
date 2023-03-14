import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {

  }


}
