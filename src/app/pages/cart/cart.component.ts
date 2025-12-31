import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Itinerary } from '../../data/itineraries';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Itinerary[] = [];
  totalAmount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.loadCart(); // refresh items + total
  }

  calculateTotal(): void {
    this.totalAmount = this.cartService.getTotalAmount();
  }
}
