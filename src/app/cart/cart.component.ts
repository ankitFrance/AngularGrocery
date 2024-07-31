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
  totalPriceGlobal : number =0; //total price
  Storetotal: number = 0;

  constructor(private cartService: CartServiceService , private foodService: FoodService) {}
  ngOnInit(){
   

    this.cartWithIds = this.cartService.getCart();
    
    this.loadCartWithAllData();

    this.storeTotalPrice();
      
  }




  

  loadCartWithAllData() {

    const allFoods = this.foodService.getAll();
    this.cartWithDetails = this.cartWithIds.map(id => allFoods.find(food => food.id === id)!);
    console.log('Cart Contents with Details:', this.cartWithDetails);
  }

  





  removeFromCart(itemId: number): void {

    this.cartService.cart = this.cartService.cart.filter(item => item !== itemId);
    this.cartService.saveCart();
    this.cartWithIds = this.cartService.getCart();
    this.loadCartWithAllData();

    this.cartService.updateCartLength();
    console.log('remaining',this.cartWithIds)

  }


  totalPrice(): number {
    let total = 0;
    for (let i = 0; i < this.cartWithDetails.length; i++) {
      total += this.cartWithDetails[i].price;
    }
   
    return total; // Returns the total price
  }
  

  storeTotalPrice() {
    
    this.Storetotal = this.totalPrice();
    
  }

 
  

}
