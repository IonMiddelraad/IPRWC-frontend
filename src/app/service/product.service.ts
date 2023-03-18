import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";


const API_PATH = 'http://localhost:8080/api/user/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  loadProducts() {
    return this.http.get(API_PATH + "/all", {params: {order: 'asc'}})
  }

  addProduct(name: string, description: string, price: number, image: string) {
    console.log("product send: ")
    return this.http.post(API_PATH + "/new", {name, description, price, image})
  }

  deleteProduct(product: Product) {
    return this.http.delete(API_PATH + "/" + product.id, {})
  }


}
