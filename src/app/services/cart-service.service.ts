import { EventEmitter, Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

   cart: number[] = [];  
   
   //*** */
   private cartLengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
   cartLength$: Observable<number> = this.cartLengthSubject.asObservable();
    
   //***** */
   showMsg: boolean = false;


  constructor() {
    
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {

    this.loadCart(); 
    this.updateCartLength();

    }
  }
 

   // Setter
   setCart(foodId: number) {
    this.cart.push(foodId);
    this.saveCart(); // Save cart data to local storage
    console.log('MY REAL CART', this.cart);
    this.updateCartLength()

    
   
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
   
//**** */
  updateCartLength() {
    this.cartLengthSubject.next(this.cart.length);
  }
//****** */
}