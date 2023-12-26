import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtPageComponent } from './art-page/art-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'search/:searchTerm' , component:HomeComponent},
  {path:'tag/:tag' , component:HomeComponent},
  {path: 'art/:id', component:ArtPageComponent},
  {path: 'cart-page',component:CartPageComponent},
  {path:'about-page',component:AboutPageComponent},
  {path:'contact-page',component:ContactPageComponent},
  {path:'login-page',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
