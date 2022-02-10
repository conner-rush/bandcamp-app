export class ProductItemModel{
    img: string;
    head: string;
    type: string;

    constructor(img: string, head: string, type: string)
    {
        this.img = img;
        this.head = head;
        this.type = type;
    }
}