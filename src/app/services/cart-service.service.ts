import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: number[] = [];  

  constructor() {
    this.loadCart(); // Load cart data from local storage when service is instantiated
  }
 

   // Setter
   setCart(foodId: number) {
    this.cart.push(foodId);
    this.saveCart(); // Save cart data to local storage
    console.log(this.cart);
  }

  // Getter
  getCart() {
    return this.cart;
  }

  // Save cart data to local storage
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Load cart data from local storage
  private loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
}