import { Routes } from '@angular/router';
import { ItineraryHomeComponent } from './pages/itinerary-home/itinerary-home.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: ItineraryHomeComponent },
  { path: 'cart', component: CartComponent },
];