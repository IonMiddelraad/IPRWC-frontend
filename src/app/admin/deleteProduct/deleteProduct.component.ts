import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-deleteProduct',
  templateUrl: 'deleteProduct.component.html'
})
export class DeleteProductComponent implements OnInit {

  productList: Product[];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.loadAllProducts();
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe();
  }

  loadAllProducts() {
    this.productService.loadProducts().subscribe(
      data => {
        this.productList = data['payload'];
      }, error => {
        console.log("Something went wrong! " + error)
      }
    )
  }
}
