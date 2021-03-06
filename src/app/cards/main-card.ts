import { Component, Input } from "@angular/core";

@Component({
    selector: 'bandcamp-main-card',
    templateUrl: 'main-card.html',
    styleUrls: ['main-card.css']
})
export class MainCardComponent {
    @Input() img:string;
    head: string;
    type: string;

    constructor()
    {
        this.img = "";
        this.head = "TITLE";
        this.type = "ARTICLE TYPE";
    }
}