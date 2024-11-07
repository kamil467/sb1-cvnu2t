import { Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  addToCart(product: Product) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      this.cartItems.update(items =>
        items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotal() {
    return this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}