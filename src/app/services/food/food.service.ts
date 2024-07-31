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
          id: 1,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Hey try out this',
          categ: 'fruits'
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
          ingredients: 'dsdad',
          categ: 'fruits'
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
          ingredients: 'htu',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'fruits'
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
          ingredients: '',
          categ: 'drink'
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
          ingredients: '',
          categ: 'drink'
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
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 17,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 18,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 19,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 20,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 21,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 22,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 23,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 24,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 25,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 26,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 27,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 28,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: '',
          categ: 'vegetable'
        },

        {
          id: 29,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: '',
          categ: 'vegetable'
        },

        {
          id: 30,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'vegetable'
        },

        {
          id: 31,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 32,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: '',
          categ: 'vegetable'
        },

        {
          id: 33,
          price: 10,
          name: 'Pizza Simple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cheesePizza.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 34,
          price: 8,
          name: 'Hamburger',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/hamburger.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 35,
          price: 5,
          name: 'Ice Cream',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/icecream.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: '',
          categ: 'vegetable'
        },

        {
          id: 36,
          price: 11,
          name: 'Pizza Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pizza.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 37,
          price: 9,
          name: 'Salad',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/salad.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 38,
          price: 7,
          name: 'Sandwich',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sandwich.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: '',
          categ: 'drink'
        },

        {
          id: 39,
          price: 9,
          name: 'Soup',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/soup.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: '',
          categ: 'fruits'
        },

        {
          id: 40,
          price: 14,
          name: 'Spicy Burger',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spicyBurger.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: '',
          categ: 'vegetable'
        },
  
      
      
      ]}
}
