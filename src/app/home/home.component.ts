import { Component, OnInit,  OnDestroy } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router'; // Import Router





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css', 
 
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  foods: Foods[] = [];
  filteredFoods: Foods[] = [];
  p: number = 1; // Current page number
  itemsPerPage: number = 8; // Number of items per page
  drinkCount: number = 0;
  fruitCount: number = 0;
  vegetableCount: number = 0;
 
 
    constructor (private fs: FoodService , private router: Router)  {

  }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
    this.filteredFoods = [...this.foods];
    this.updateCounts()
  
}
filterFoods(): void {
  console.log('Filtering:', this.searchTerm); // Debugging log
  if (this.searchTerm) {
    this.filteredFoods = this.foods.filter(food =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } else {
    this.filteredFoods = [...this.foods];
  }
  console.log('Filtered Foods:', this.filteredFoods); // Debugging log
}


filterByCategory(category: string): void {
  this.filteredFoods = this.foods.filter(food =>
    food.categ.toLowerCase() === category.toLowerCase()
  );
  this.p = 1; // Reset pagination to first page
}

showAll(): void {
  this.filteredFoods = [...this.foods];
  this.p = 1; // Reset pagination to first page
}

updateCounts(): void {
  this.drinkCount = this.foods.filter(food => food.categ === 'drink').length;
  this.fruitCount = this.foods.filter(food => food.categ === 'fruits').length;
  this.vegetableCount = this.foods.filter(food => food.categ === 'vegetable').length;
}

goToDishDetail(id: number) {
  this.router.navigate(['/dish', id]);
}
}
