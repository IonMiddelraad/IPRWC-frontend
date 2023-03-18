import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-addProduct',
  templateUrl: 'addProduct.component.html'
})
export class AddProductComponent implements OnInit {

  productDetails = {
    name: null,
    description: null,
    price: null,
    image: null
  };

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
  }

  reset() {
    this.productDetails.name = null;
    this.productDetails.description = null;
    this.productDetails.price = null;
    this.productDetails.image = null;
  }

  submitNewProduct() {
    this.productService.addProduct(
      this.productDetails.name,
      this.productDetails.description,
      this.productDetails.price,
      this.productDetails.image).subscribe();
    this.reset();
  }

}
