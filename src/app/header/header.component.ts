import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  cartLength: number = 0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.cartLength$.subscribe(length => {
      this.cartLength = length;
    });
    
  }

  
}
