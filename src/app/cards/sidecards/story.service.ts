import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";

@Injectable({
    providedIn: 'root'
})
export class StoryService 
{

    private baseUrl: string = 'https://bandcamp-project-f1a1f-default-rtdb.firebaseio.com/';
    private storiesEndPoint: string = 'stroies.json';

    constructor(private http:HttpClient) {
        
    }

public getStories()
{
    return this.http.get<ProductItemModel []>(this.baseUrl + this.storiesEndPoint);
}

public getStory(index: number)
{
    return this.http.get<ProductItemModel>(this.baseUrl + "stories/" + index + ".json");

}
}