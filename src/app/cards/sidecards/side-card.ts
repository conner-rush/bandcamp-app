import { Component, Input } from "@angular/core";

@Component({
    selector: 'bandcamp-side-card',
    templateUrl: 'side-card.html',
    styleUrls: ['side-card.css']
})
export class SideCardComponent {
    @Input() img:string;
    @Input()head: string;
    @Input()type: string;

    constructor()
    {
        this.img = "";
        this.head = "TITLE";
        this.type = "ARTICLE TYPE";
    }
}