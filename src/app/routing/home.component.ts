import {Component, OnInit } from '@angular/core';
import { mock_product_list } from '../cards/sidecards/mock-product';
import { ProductItemModel } from '../cards/sidecards/product-item-model';
import { StoryService } from '../cards/sidecards/story.service';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    products: ProductItemModel [] = [];

  constructor(private service: StoryService)
  {
    
  }
  
  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getStories().subscribe(data => {
        console.log(data);
        for(var product of data){
          this.products.push(product);
        }
      });
    }

}