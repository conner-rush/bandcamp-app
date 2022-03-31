import { ProductItemModel } from "../cards/sidecards/product-item-model";
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fm-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
    
    login(product:ProductItemModel) {
        console.log("You pressed login");
        console.log(product);
    }
}