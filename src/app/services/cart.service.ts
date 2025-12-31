import { Injectable } from '@angular/core';
import { Itinerary } from '../data/itineraries';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'travel_cart';

  constructor() {}

  getCartItems(): Itinerary[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addToCart(item: Itinerary): void {
    const cart = this.getCartItems();
    const exists = cart.find(i => i.id === item.id);

    if (!exists) {
      cart.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(cart));
    }
  }

  removeFromCart(id: number): void {
    const cart = this.getCartItems().filter(i => i.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  getTotalAmount(): number {
    return this.getCartItems()
      .reduce((sum, item) => sum + item.totalCost, 0);
  }

   getCartCount(): number {
    return this.getCartItems().length;
  }
}
