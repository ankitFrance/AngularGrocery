import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

   cart: number[] = [];  



  constructor() {
    
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {

    this.loadCart(); 

    }
  }
 

   // Setter
   setCart(foodId: number) {
    this.cart.push(foodId);
    this.saveCart(); // Save cart data to local storage
    console.log('MY REAL CART', this.cart);
  }

  // Getter
  getCart() {
    return this.cart;
  }

  // Save cart data to local storage
   saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log(localStorage)
  }

  // Load cart data from local storage
  private loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }


  
}