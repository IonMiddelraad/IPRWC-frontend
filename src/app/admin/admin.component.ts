import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {data} from "autoprefixer";
import {PermissionHelper} from "../helpers/permission.helper";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private permissionHelper: PermissionHelper
  ) {}

  ngOnInit(): void {
    this.checkRole();
  }

  checkRole() {
    this.authService.getUserDetails().subscribe(
      data => {
        const roles = data.roles;
        const permissions = this.permissionHelper.rolesToPermissionsList(roles);

        if (!this.permissionHelper.hasAdminPermission(permissions)) {
          void this.router.navigate(['dashboard']);
        }
      }

    )
  }


}
