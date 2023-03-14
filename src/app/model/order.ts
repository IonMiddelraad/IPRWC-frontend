import {User} from "./user";
import {Product} from "./product";

export class Order {
  private _id: number;
  private _user: User;
  private productList: Product[];

  constructor(id: number, user: User, productList: Product[]) {
    this._id = id;
    this._user = user
    this.productList = productList;
  }
}
