import { Injectable } from '@angular/core';
import { Art } from '../../shared/models/art';
import { Tag } from '../../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getArtById(id:number): Art
  {
    return this.getAll().find(art => art.id == id)!;
  }
  getAllArtsBySearchTerm(searchTerm:string) :Art[]{
    return this.getAll().filter(art=>art.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[]{
    return [
      {name: 'All', count: 12},
      {name: 'Fashion', count: 3},
      {name: 'Aesthetic', count: 5},
      {name: 'Feminine', count: 3},
      {name: 'Nature', count: 1},
      {name: 'Beauty', count: 1},
      {name: 'Luxury', count: 2},
      {name: 'Fragrance', count: 1},
      {name: 'Unique', count: 2},
      {name: 'Authentic', count: 1},
      {name: 'Exceptional', count: 1},
      {name: 'Miraculous', count: 1},
      {name: 'Hazed', count: 2},
      {name: 'Bold', count: 1}
    ]
  }



  getAllArtsByTag(tag:string): Art[] {
    return tag == "All"?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll(): Art[] {
    return [
      {
        id:1,
        name:'Wide Walls',
        price: 500,
        favorite: true,
        origins: ['Paris ','UK'],
        deliveryTime: '2 days',
        stars:3.5,
        imageUrl:'/assets/images/art/p1.jpg',
        tags:['Fashion','Aesthetic'],
      },
      {
        id:2,
        name:'Invaluable',
        price: 680,
        favorite: true,
        origins: ['France ','USA'],
        deliveryTime: '3 days',
        stars:4.5,
        imageUrl:'/assets/images/art/p2.jpg',
        tags:['Feminine','Aesthetic'],
      },
      {
        id:3,
        name:'Forest river',
        price: 320,
        favorite: true,
        origins: ['India ','Sri Lanka'],
        deliveryTime: '1 day',
        stars:3.2,
        imageUrl:'/assets/images/art/p3.jpg',
        tags:['Nature','Beauty'],
      },
      {
        id:4,
        name:'Artalistic',
        price: 720,
        favorite: false,
        origins: ['Paris ','Germany'],
        deliveryTime: '2 days',
        stars:4.9,
        imageUrl:'/assets/images/art/p4.jpg',
        tags:['Luxury','Fragrance'],
      },
      {
        id:5,
        name:'Guneivar',
        price: 1020,
        favorite: false,
        origins: ['Italy ','UK'],
        deliveryTime: '7 days',
        stars:4.9,
        imageUrl:'/assets/images/art/p5.jpg',
        tags:['Fashion','Aesthetic'],
      },
      {
        id:6,
        name:'Landscape',
        price: 836,
        favorite: false,
        origins: ['New York ','Australia'],
        deliveryTime: '5 days',
        stars:3.9,
        imageUrl:'/assets/images/art/p6.jpg',
        tags:['Feminine','Unique'],
      },
      {
        id:7,
        name:'Samuel Art',
        price: 1360,
        favorite: false,
        origins: ['India ','UK'],
        deliveryTime: '6 days',
        stars:3.5,
        imageUrl:'/assets/images/art/p7.jpg',
        tags:['Authentic','Exceptional'],
      },
      {
        id:8,
        name:'Singulart',
        price: 683,
        favorite: true,
        origins: ['Paris ','UK'],
        deliveryTime: '2 days',
        stars:4.2,
        imageUrl:'/assets/images/art/p8.jpg',
        tags:['Miraculous','Aesthetic'],
      },
      {
        id:9,
        name:'Artland',
        price: 1230,
        favorite: false,
        origins: ['Paris ','UK'],
        deliveryTime: '8 days',
        stars:4.6,
        imageUrl:'/assets/images/art/p9.jpg',
        tags:['Hazed','Luxury'],
      },
      {
        id:10,
        name:'Allurios',
        price: 826,
        favorite: true,
        origins: ['Paris ','UK'],
        deliveryTime: '10 days',
        stars:3.9,
        imageUrl:'/assets/images/art/p10.jpg',
        tags:['Fashion','Aesthetic'],
      },
      {
        id:11,
        name:'Malhar art',
        price: 500,
        favorite: false,
        origins: ['Paris ','UK'],
        deliveryTime: '13 days',
        stars:3.5,
        imageUrl:'/assets/images/art/p11.jpg',
        tags:['Feminine','Unique'],
      },
      {
        id:12,
        name:'Art space',
        price: 1500,
        favorite: false,
        origins: ['Paris ','UK'],
        deliveryTime: '26 days',
        stars:4.9,
        imageUrl:'/assets/images/art/p12.jpg',
        tags:['Bold','Hazed'],
      },
    ]
  }
}