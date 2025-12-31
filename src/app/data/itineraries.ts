export interface Itinerary {
  id: number;
  destination: string;
  country: string;
  foodPreference: 'Veg' | 'Non-Veg' | 'Both';
  activities: string[];
  hotelType: string;
  nights: number;
  flightCharges: number;
  totalCost: number;
  image: string;
}

export const ITINERARIES: Itinerary[] = [
  {
    id: 1,
    destination: 'Paris',
    country: 'France',
    foodPreference: 'Both',
    activities: ['City Tour', 'Museum Visit'],
    hotelType: '4 Star',
    nights: 5,
    flightCharges: 50000,
    totalCost: 120000,
    image: 'assets/images/paris.jpg'
  },
  {
    id: 2,
    destination: 'London',
    country: 'UK',
    foodPreference: 'Non-Veg',
    activities: ['River Cruise'],
    hotelType: '3 Star',
    nights: 4,
    flightCharges: 48000,
    totalCost: 100000,
    image: 'assets/images/london.jpg'
  },
  {
    id: 3,
    destination: 'Dubai',
    country: 'UAE',
    foodPreference: 'Non-Veg',
    activities: ['Desert Safari', 'Sky Diving'],
    hotelType: '5 Star',
    nights: 5,
    flightCharges: 40000,
    totalCost: 150000,
    image: 'assets/images/dubai.jpg'
  },
  {
    id: 4,
    destination: 'Bali',
    country: 'Indonesia',
    foodPreference: 'Both',
    activities: ['Beach', 'Temple Visit'],
    hotelType: '4 Star',
    nights: 6,
    flightCharges: 35000,
    totalCost: 130000,
    image: 'assets/images/bali.jpg'
  }
];
