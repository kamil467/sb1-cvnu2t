import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductCardComponent } from './app/components/product-card.component';
import { ProductSliderComponent } from './app/components/product-slider.component';
import { ShoppingCartComponent } from './app/components/shopping-cart.component';
import { HeaderComponent } from './app/components/header.component';
import { Product } from './app/models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductCardComponent,
    ProductSliderComponent,
    ShoppingCartComponent,
    HeaderComponent
  ],
  template: `
    <app-header></app-header>
    <main class="container mx-auto px-4 pt-20">
      <app-product-slider></app-product-slider>
      
      <div class="mb-8">
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-2">Summer Sale! 🌞</h2>
          <p class="text-lg">Get up to 50% off on selected items. Limited time offer!</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-6">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @for (product of products; track product.id) {
          <app-product-card [product]="product"></app-product-card>
        }
      </div>
    </main>
    <app-shopping-cart></app-shopping-cart>
  `,
})
export class App {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality wireless headphones with noise cancellation',
      imageUrl: 'https://picsum.photos/400/300?random=1'
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 199.99,
      description: 'Feature-rich smartwatch with health tracking',
      imageUrl: 'https://picsum.photos/400/300?random=2'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 49.99,
      description: 'Durable laptop backpack with multiple compartments',
      imageUrl: 'https://picsum.photos/400/300?random=3'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 79.99,
      description: 'Portable bluetooth speaker with amazing sound',
      imageUrl: 'https://picsum.photos/400/300?random=4'
    }
  ];
}

bootstrapApplication(App);