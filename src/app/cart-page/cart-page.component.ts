import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { ArtService } from '../services/art/art.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService, private artService:ArtService) {
    this.setCart();

  }
  
  ngOnInit(): void { }
    setCart(){
      this.cart = this.cartService.getCart();
    }
    removeCartItem(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.art.id);
      this.setCart();
    }
    changeQuantity(cartItem:CartItem , quantityInString:string){
      let quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.art.id , quantity);
      this.setCart();

    }
}
