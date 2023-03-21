import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../environments/environment.prod";


const API_PATH = environment.apiUrl + '/api/user/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  loadProducts() {
    return this.http.get(environment.apiUrlAuth + "/product/all", {params: {order: 'asc'}})
  }

  addProduct(name: string, description: string, price: number, image: string) {
    return this.http.post(API_PATH + "/new", {name, description, price, image})
  }

  deleteProduct(product: Product) {
    return this.http.delete(API_PATH + "/" + product.id, {})
  }


}
