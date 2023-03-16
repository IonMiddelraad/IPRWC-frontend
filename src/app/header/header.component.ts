import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";
import {PermissionHelper} from "../helpers/permission.helper";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  isLoggedIn = false;
  email?: string;
  currentUser =  { username:'Guest', email: ''};
  isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private permissionHelper: PermissionHelper) {}

  navItems = [
    {
      display: 'Producten',
      path: '/dashboard'
    },
    {
      display: 'Recente Orders',
      path: '/order'
    },
    {
      display: 'Winkelwagen',
      path: '/cart'
    }
  ];

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

      this.authService.getUserDetails().subscribe(
        data => {
          const employee: User = data;
          const roles = employee.roles;
          const permissions = this.permissionHelper.rolesToPermissionsList(roles);

          this.isAdmin = this.permissionHelper.hasAdminPermission(permissions);

          if(this.isAdmin){
            this.navItems.push({
              display: 'admin',
              path: '/admin'
            });
          }
        }
      )
    } else {
      this.navItems.push({
        display: 'Login',
        path: '/login'
      });
    }



  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  isExpanded: boolean | undefined;
}
