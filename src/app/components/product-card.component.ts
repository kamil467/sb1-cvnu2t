import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img [src]="product.imageUrl" [alt]="product.name" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-lg font-semibold mb-2">{{product.name}}</h3>
      <p class="text-gray-600 mb-2">{{product.description}}</p>
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold">${{product.price}}</span>
        <button
          (click)="addToCart()"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  `,
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}