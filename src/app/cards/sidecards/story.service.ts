import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class StoryService {

    constructor(private db:AngularFireDatabase) {
        
    }

    public getStories() {
        return this.db.list<ProductItemModel>("products").valueChanges();   
    }

    public getStory(index: number) {
        return this.db.list("products", ref => ref.orderByChild("type").startAt(10)).valueChanges();

    }

    public addStory(product:ProductItemModel)
    {
        this.db.list<ProductItemModel>("products").push(product);
    }

}