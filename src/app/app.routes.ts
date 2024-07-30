import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    { path: 'dish/:id', component: DishDetailComponent }, 
    { path: 'cart', component: CartComponent }, 
];
