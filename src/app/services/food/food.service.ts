import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


    getAll():Foods[]{

      return [
        {

          id : 1,
          price : 10,
          name : 'Pizza Simple',
          favorite : false,
          star : 4,
          tags : ['Fastfood', 'Pizza', 'Lunch'],
          imageURL : '/cheesePizza.jpg',
          cookTime : 'Approx 30 mins',
          origins : ['Spain'],
          ingredients: 'Hey try out this'
    
        },

        {
          id: 2,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'dsdad'
        },

        {
          id: 3,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'htu'
        },

        {
          id: 4,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: ''
        },

        {
          id: 5,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: ''
        },

        {
          id: 6,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 7,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: ''
        },

        {
          id: 8,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: ''
        },

        {
          id: 9,
          price: 111,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: ''
        },

        {
          id: 10,
          price: 84,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 11,
          price: 53,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: ''
        },

        {
          id: 12,
          price: 151,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: ''
        },

        {
          id: 13,
          price: 94,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: ''
        },

        {
          id: 14,
          price: 47,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 15,
          price: 59,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: ''
        },

        {
          id: 16,
          price: 154,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: ''
        },

        {
          id: 1,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: ''
        },

        {
          id: 2,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 3,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: ''
        },

        {
          id: 4,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: ''
        },

        {
          id: 5,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: ''
        },

        {
          id: 6,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 7,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: ''
        },

        {
          id: 8,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: ''
        },

        {
          id: 1,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: ''
        },

        {
          id: 2,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 3,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: ''
        },

        {
          id: 4,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: ''
        },

        {
          id: 5,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: ''
        },

        {
          id: 6,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 7,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: ''
        },

        {
          id: 8,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: ''
        },

        {
          id: 1,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: ''
        },

        {
          id: 2,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 3,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: ''
        },

        {
          id: 4,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: ''
        },

        {
          id: 5,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: ''
        },

        {
          id: 6,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: ''
        },

        {
          id: 7,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: ''
        },

        {
          id: 8,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: ''
        },
  
      
      
      ]}
}
