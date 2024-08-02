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
          name: 'Apple',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/apple.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 2,
          price: 8,
          name: 'Avocado',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/avocado.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 3,
          price: 5,
          name: 'Banana',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/banana.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 4,
          price: 11,
          name: 'Cherry',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cherry.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 5,
          price: 9,
          name: 'Date',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/date.png',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 6,
          price: 7,
          name: 'Durian',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/durian.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 7,
          price: 9,
          name: 'Grapes',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/grapes.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 8,
          price: 14,
          name: 'Guava',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/guava.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 9,
          price: 11,
          name: 'Litchi',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/litchi.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 10,
          price: 4,
          name: 'Mango',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/mango.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 11,
          price: 5,
          name: 'Nectar',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/nect.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 12,
          price: 11,
          name: 'Papaya',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/papaya.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 13,
          price: 9,
          name: 'Passion fruit',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/Passion.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 14,
          price: 7,
          name: 'Coca Cola',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cocoDrink.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 15,
          price: 5,
          name: 'Coffee',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/coffeeDrink.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 16,
          price: 4,
          name: 'Falooda',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/faloodadrink.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 17,
          price: 3,
          name: 'Fanta',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/fantaDrink.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 18,
          price: 8,
          name: 'Lassi',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/lassiDrink.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 19,
          price: 5,
          name: 'Pear',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pear.png',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 20,
          price: 11,
          name: 'Per',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/per.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 21,
          price: 9,
          name: 'Pine',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pine.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 22,
          price: 7,
          name: 'Pomengrate',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pom.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 23,
          price: 9,
          name: 'Lemonade',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/lemonade.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 24,
          price: 14,
          name: 'Limca',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/limcaDrink.png',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 25,
          price: 10,
          name: 'Pepsi',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/pepsiDrink.jpg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 26,
          price: 8,
          name: 'Rooh Afza',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/roohDrink.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 27,
          price: 5,
          name: '7 up',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/sevenupDrink.jpeg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 28,
          price: 11,
          name: 'Tomato',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/tomato.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },

        {
          id: 29,
          price: 9,
          name: 'Spinach',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/spinach.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },

        {
          id: 30,
          price: 7,
          name: 'Peas',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/peas.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },

        {
          id: 31,
          price: 9,
          name: 'Thumbs Up',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/thumbsDrink.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 32,
          price: 14,
          name: 'Carrot',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/carrot.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },

        {
          id: 33,
          price: 10,
          name: 'Quince',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/quince.jpeg',
          cookTime: 'Approx 30 mins',
          origins: ['Spain'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 34,
          price: 8,
          name: 'Rambutan',
          favorite: false,
          star: 3,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/rambutan.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 35,
          price: 5,
          name: 'Cauliflower',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/cauli.jpg',
          cookTime: 'Approx 20 mins',
          origins: ['Turkish'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },

        {
          id: 36,
          price: 11,
          name: 'Star Fruit',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/star.jpg',
          cookTime: 'Approx 15 mins',
          origins: ['Italy'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 37,
          price: 9,
          name: 'Beer',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/beerDrink.jpg',
          cookTime: 'Approx 35 mins',
          origins: ['France'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 38,
          price: 7,
          name: 'Vodka',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/alcoholdrink.jpg',
          cookTime: 'Approx 45 mins',
          origins: ['USA'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'drink'
        },

        {
          id: 39,
          price: 9,
          name: 'Strawberry',
          favorite: false,
          star: 5,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/straw.jpg',
          cookTime: 'Approx 25 mins',
          origins: ['Russia'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'fruits'
        },

        {
          id: 40,
          price: 14,
          name: 'Onion',
          favorite: false,
          star: 4,
          tags: ['Fastfood', 'Pizza', 'Lunch'],
          imageURL: '/onion.jpg',
          cookTime: 'Approx 55 mins',
          origins: ['Middle east'],
          ingredients: 'Lorem ipsum dolor sit amet',
          categ: 'vegetable'
        },
  
      
      
      ]}
}