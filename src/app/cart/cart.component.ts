import { Component , OnInit} from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartWithIds: number[] = [];  
  cartWithDetails: Foods[] = [];

  constructor(private cartService: CartServiceService , private foodService: FoodService) {}
  ngOnInit(){


      this.cartWithIds = this.cartService.getCart();
      console.log('in cart route', this.cartWithIds)
   
      const allFoods = this.foodService.getAll();
      this.cartWithDetails = this.cartWithIds.map(id => allFoods.find(food => food.id === id)!)
      console.log('Cart Contents with Details:', this.cartWithDetails);
   
  }

}
