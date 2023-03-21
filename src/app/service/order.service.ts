import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order";
import {Product} from "../model/product";
import {environment} from "../../environments/environment.prod";


const API_PATH = environment.apiUrl + '/api/user/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {
  }

  loadOrders() {
    return this.http.get(environment.apiUrlAuth + "/order/all", {params: {order: 'asc'}})
  }

  sendOrder(productList: Product[]) {
    return this.http.post(API_PATH + "/new", {productList})
  }

  deleteOrder(orderId: number) {
    return this.http.delete(API_PATH + "/" + orderId, {});
  }


}
