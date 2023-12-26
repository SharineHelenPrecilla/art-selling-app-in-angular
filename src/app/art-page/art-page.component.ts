import { Component, OnInit} from '@angular/core';
import { ArtService} from '../services/art/art.service';
import { Art } from '../shared/models/art';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';



@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrl: './art-page.component.css'
})
export class ArtPageComponent implements OnInit {

  art!: Art;
  constructor(private activatedRoute :ActivatedRoute,
    private artService:ArtService,
    private cartService:CartService,
    private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.art = artService.getArtById(params['id']);
    })
  }

  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.art);
    this.router.navigateByUrl('/cart-page');
  }
  
}
