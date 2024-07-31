import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-dish-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-detail.component.html',
  styleUrl: './dish-detail.component.css'
})
export class DishDetailComponent implements OnInit {
  
  
  food: Foods | undefined;
  showMsg: boolean= false;

  constructor(private route: ActivatedRoute, private foodService: FoodService , private cartService: CartServiceService) { }

  ngOnInit(): void {
    // Get the food ID from the route parameters
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Fetch the food details based on ID
    this.food = this.foodService.getAll().find(food => food.id === id);
  }

  AddedToCart(id : number){
    this.cartService.setCart(id);

    this.showMsg = true;

    // Hide the message after 1 second
    setTimeout(() => {
      this.showMsg = false;
    }, 600);
  }
}