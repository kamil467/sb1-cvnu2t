import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform"
         [class.translate-x-0]="isOpen"
         [class.translate-x-full]="!isOpen">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Shopping Cart</h2>
        <button (click)="isOpen = false" class="text-gray-500 hover:text-gray-700">×</button>
      </div>
      
      @if (cartItems().length === 0) {
        <p class="text-gray-500">Your cart is empty</p>
      } @else {
        <div class="space-y-4">
          @for (item of cartItems(); track item.id) {
            <div class="flex justify-between items-center">
              <div>
                <h3 class="font-semibold">{{item.name}}</h3>
                <p class="text-sm text-gray-500">Qty: {{item.quantity}}</p>
              </div>
              <div class="text-right">
                <p class="font-bold">${{item.price * item.quantity}}</p>
                <button
                  (click)="removeItem(item.id)"
                  class="text-red-500 text-sm hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          }
        </div>
        
        <div class="mt-4 pt-4 border-t">
          <div class="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${{total()}}</span>
          </div>
          <button
            class="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Checkout
          </button>
        </div>
      }
    </div>
  `
})
export class ShoppingCartComponent {
  isOpen = false;
  cartItems = this.cartService.getCartItems();
  total = computed(() => this.cartService.getTotal());

  constructor(private cartService: CartService) {}

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}