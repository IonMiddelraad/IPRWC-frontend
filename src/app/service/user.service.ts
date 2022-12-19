import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const API_PATH = 'http://localhost:8080/api/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    username: string;
    email: string;

    constructor(private http: HttpClient) {
    }

    getAllUsers() {
        return this.http.get(API_PATH);
    }

    disableUser(user_id: number) {
        return this.http.delete(API_PATH + '/' + user_id);
    }
}
