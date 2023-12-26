import { Art } from "./art";

export class CartItem{
    constructor(art:Art){
        this.art = art;
    }
    art:Art;
    quantity:number = 1;

    get price():number{
        return this.art.price *this.quantity;
    }
}