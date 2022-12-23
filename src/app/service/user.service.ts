import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PermissionHelper} from "../helpers/permission.helper";
import {Employee} from "../model/employee";

const API_PATH = 'http://localhost:8080/api/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    username: string;
    email: string;

    constructor(private http: HttpClient, private permissionHelper: PermissionHelper) {
    }

    getAllUsers() {
        return this.http.get(API_PATH);
    }

    disableUser(user_id: number) {
        return this.http.delete(API_PATH + '/' + user_id);
    }

    filterDisabledEmployees(employees: Employee[]) {
        employees.forEach(employee => {
            const permissions = this.permissionHelper.rolesToPermissionsList(employee.roles);
            if(this.permissionHelper.hasPermission(permissions, 'NONE')) {
                employees.splice(employees.indexOf(employee), employees.length);
            }
        });
    }
}
