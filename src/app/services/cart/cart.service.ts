import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { Art } from '../../shared/models/art';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(art:Art):void{
    let cartItem = this.cart.items.find(items=>items.art.id == art.id);
    if(cartItem){
      this.changeQuantity(art.id, cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new CartItem(art));
  }
  removeFromCart(artId:number):void{
    this.cart.items = this.cart.items.filter(item => item.art.id != artId);
  }
  changeQuantity(artId:number , artQty:number){
    let cartItem = this.cart.items.find(item => item.art.id = artId)
    if(!cartItem) return;
    cartItem.quantity = artQty;
  }
  getCart():Cart{
    return this.cart;
  }
}
