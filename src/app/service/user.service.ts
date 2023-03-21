import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PermissionHelper} from "../helpers/permission.helper";
import {User} from "../model/user";
import {environment} from "../../environments/environment.prod";

const API_PATH = environment.apiUrl + '/api/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{
  username: string | undefined;
  email: string | undefined;

    constructor(private http: HttpClient, private permissionHelper: PermissionHelper) {
    }

    getAllUsers() {
        return this.http.get(API_PATH);
    }

    disableUser(user_id: number) {
        return this.http.delete(API_PATH + '/' + user_id);
    }

    filterDisabledEmployees(employees: User[]) {
        employees.forEach(employee => {
            const permissions = this.permissionHelper.rolesToPermissionsList(employee.roles);
            if(this.permissionHelper.hasPermission(permissions, 'NONE')) {
                employees.splice(employees.indexOf(employee), employees.length);
            }
        });
    }
}
