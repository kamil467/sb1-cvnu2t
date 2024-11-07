import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold">E-Shop</h1>
            <nav class="hidden md:flex ml-8 space-x-4">
              <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">Categories</a>
            </nav>
          </div>
          
          <div class="flex items-center space-x-4">
            <button class="relative">
              <span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {{cartItemsCount()}}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(private cartService: CartService) {}

  cartItemsCount = computed(() => 
    this.cartService.getCartItems().reduce((total, item) => total + item.quantity, 0)
  );
}