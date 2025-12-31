import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITINERARIES, Itinerary } from '../../data/itineraries';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-itinerary-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itinerary-home.component.html',
  styleUrls: ['./itinerary-home.component.css']
})
export class ItineraryHomeComponent {

  itineraries: Itinerary[] = ITINERARIES;
  filteredItineraries: Itinerary[] = ITINERARIES;

  destinations: string[] = [];
  selectedDestination: string = '';

  constructor(private cartService: CartService) {
    this.destinations = [...new Set(this.itineraries.map(i => i.destination))];
  }

  onDestinationChange(destination: string): void {
    this.selectedDestination = destination;
    this.filteredItineraries = destination
      ? this.itineraries.filter(i => i.destination === destination)
      : this.itineraries;
  }

  addToCart(itinerary: Itinerary): void {
    this.cartService.addToCart(itinerary);
    alert('Package added to cart');
  }
}
