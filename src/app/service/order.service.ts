import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order";
import {Product} from "../model/product";


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

  sendOrder(productList: Product[]) {
    return this.http.post(API_PATH + "/new", {productList})
  }


}
