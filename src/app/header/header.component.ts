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
  currentUser =  { username:'Not logged in', email: ''};
  isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private permissionHelper: PermissionHelper) {}

  navItems = [
    {
      display: 'Dashboard',
      path: '/dashboard'
    },
    {
      display: 'Reservation',
      path: '/reservation'
    },
    {
      display: 'Agenda',
      path: '/calendar'
    },
    {
      display: 'Rooms',
      path: '/rooms'
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
              display: 'Admin',
              path: '/admin'
            });
          }
        }
      )
    }



  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  isExpanded: boolean | undefined;
}