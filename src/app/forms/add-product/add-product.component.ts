import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/cards/sidecards/product-item-model';
import { StoryService } from 'src/app/cards/sidecards/story.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ss:StoryService) { }

  ngOnInit(): void {
  }
  
  addStory(product:ProductItemModel) {
      console.log("You pressed login");
      console.log(product);
      this.ss.addStory(product);
  }
}
