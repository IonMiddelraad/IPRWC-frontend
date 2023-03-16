import {User} from "./user";
import {Product} from "./product";

export class Order {
  private _id: number;
  private _user: User;
  private _productList: Product[];

  constructor(id: number, user: User, productList: Product[]) {
    this._id = id;
    this._user = user
    this._productList = productList;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get productList(): Product[] {
    return this._productList;
  }

  set productList(value: Product[]) {
    this._productList = value;
  }
}
