import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {PermissionHelper} from "../helpers/permission.helper";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  adminOptions = ["Delete order", "Delete product", "Add product"];
  currentPage: string = "Admin menu"


  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private permissionHelper: PermissionHelper
  ) {}

  ngOnInit(): void {
    this.checkRole();
  }

  loadSelectedOption(option: string) {
    switch (option) {
      case 'Delete order':
        this.currentPage = "Delete order";
        break;
      case 'Delete product':
        this.currentPage = "Delete product";
        break;
      case 'Add product':
        this.currentPage = "Add product";
        break;
      case 'Admin menu':
        this.currentPage = "Admin menu";
        break;
      default:
        console.log('Option ' + option + 'is not a possible admin option');
    }
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
