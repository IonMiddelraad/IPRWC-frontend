import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


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


}
