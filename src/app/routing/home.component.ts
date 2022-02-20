import {Component } from '@angular/core';
import { mock_product_list } from '../cards/sidecards/mock-product';
import { ProductItemModel } from '../cards/sidecards/product-item-model';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent{
    products: ProductItemModel [] = [];

  constructor()
  {
    for (var product of mock_product_list)
    {
      console.log(product);
      this.products.push(product);
    }
  }
}