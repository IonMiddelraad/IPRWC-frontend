import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


const API_PATH = 'http://localhost:8080/api/user/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {
  }

  loadOrders() {
    return this.http.get(API_PATH + "/all", {params: {order: 'asc'}})
  }


}
