import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false;
  email?: string;
  currentUser =  { username: 'Guest', email: ''};

  productList: Product[];

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.authService.getUserDetails().subscribe(
        data => {
          this.currentUser.email = data.email;
          this.currentUser.username = data.name;
        },
        err => {
          console.log("Failed to get user data " + err)
        });
    }
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.loadProducts().subscribe(
      data => {
        this.productList = data['payload'];
      }, error => {
        console.log("Something went wrong! " + error)
      }
    )
  }


}
