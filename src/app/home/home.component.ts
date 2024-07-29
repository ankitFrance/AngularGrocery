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


 
    constructor (private fs: FoodService , private router: Router)  {

  }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
    this.filteredFoods = [...this.foods];
  
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

goToDishDetail(id: number) {
  this.router.navigate(['/dish', id]);
}
}