// Butuan City Important Locations
import { Landmark, Terminal, EmergencyLocation } from '../types';

// Butuan City Center Coordinates
export const BUTUAN_CENTER = {
  lat: 8.9475,
  lng: 125.5406
};

// Major Landmarks
export const MAJOR_LANDMARKS: Landmark[] = [
  {
    id: 'robinsons-butuan',
    name: 'Robinsons Place Butuan',
    type: 'mall',
    coordinates: { lat: 8.9475, lng: 125.5406 },
    address: 'Montilla Blvd, Butuan City',
    description: 'Major shopping mall and transportation hub'
  },
  {
    id: 'sm-butuan',
    name: 'SM City Butuan',
    type: 'mall',
    coordinates: { lat: 8.9369, lng: 125.5289 },
    address: 'J.C. Aquino Avenue, Butuan City',
    description: 'Largest shopping mall in Butuan'
  },
  {
    id: 'gaisano-butuan',
    name: 'Gaisano Mall Butuan',
    type: 'mall',
    coordinates: { lat: 8.9494, lng: 125.5367 },
    address: 'J. Rosales Avenue, Butuan City',
    description: 'Popular shopping destination'
  },
  {
    id: 'fsuu',
    name: 'Father Saturnino Urios University',
    type: 'school',
    coordinates: { lat: 8.9478, lng: 125.5444 },
    address: 'San Francisco, Butuan City',
    description: 'Private Catholic university'
  },
  {
    id: 'csu',
    name: 'Caraga State University',
    type: 'school',
    coordinates: { lat: 8.9889, lng: 125.5294 },
    address: 'Ampayon, Butuan City',
    description: 'State university main campus'
  },
  {
    id: 'bancasi-airport',
    name: 'Bancasi Airport',
    type: 'terminal',
    coordinates: { lat: 8.9515, lng: 125.4788 },
    address: 'Bancasi, Butuan City',
    description: 'Butuan City domestic airport'
  },
  {
    id: 'guingona-park',
    name: 'Guingona Park',
    type: 'other',
    coordinates: { lat: 8.9472, lng: 125.5428 },
    address: 'Montilla Blvd, Butuan City',
    description: 'City park and recreational area'
  }
];

// Terminals
export const TERMINALS: Terminal[] = [
  {
    id: 'langihan-terminal',
    name: 'Langihan Terminal',
    type: 'jeepney',
    coordinates: { lat: 8.9556, lng: 125.5361 },
    address: 'Langihan, Butuan City',
    routes: [],
    facilities: ['Waiting Area', 'Restroom', 'Food Stalls'],
    operating_hours: {
      start: '05:00',
      end: '21:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  },
  {
    id: 'butuan-bus-terminal',
    name: 'Butuan Integrated Bus Terminal',
    type: 'bus',
    coordinates: { lat: 8.9425, lng: 125.5394 },
    address: 'J. Rosales Avenue, Butuan City',
    routes: [],
    facilities: ['Waiting Area', 'Restroom', 'Ticket Office', 'Food Court'],
    operating_hours: {
      start: '04:00',
      end: '22:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  },
  {
    id: 'libertad-market',
    name: 'Libertad Public Market',
    type: 'jeepney',
    coordinates: { lat: 8.9503, lng: 125.5383 },
    address: 'Libertad, Butuan City',
    routes: [],
    facilities: ['Market', 'Food Stalls'],
    operating_hours: {
      start: '05:00',
      end: '20:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  }
];

// Emergency Locations
export const EMERGENCY_LOCATIONS: EmergencyLocation[] = [
  {
    id: 'adzu-hospital',
    name: 'Agusan del Norte Provincial Hospital',
    type: 'hospital',
    coordinates: { lat: 8.9447, lng: 125.5419 },
    address: 'Montilla Blvd, Butuan City',
    contact: '(085) 225-5555',
    hotline: '911',
    is24Hours: true
  },
  {
    id: 'butuan-medical-center',
    name: 'Butuan Medical Center',
    type: 'hospital',
    coordinates: { lat: 8.9489, lng: 125.5372 },
    address: 'J. Rosales Avenue, Butuan City',
    contact: '(085) 225-6789',
    hotline: '911',
    is24Hours: true
  },
  {
    id: 'butuan-police',
    name: 'Butuan City Police Station',
    type: 'police',
    coordinates: { lat: 8.9461, lng: 125.5397 },
    address: 'Butuan City',
    contact: '(085) 225-3333',
    hotline: '911',
    is24Hours: true
  },
  {
    id: 'butuan-fire',
    name: 'Butuan City Fire Station',
    type: 'fire_station',
    coordinates: { lat: 8.9453, lng: 125.5389 },
    address: 'Butuan City',
    contact: '(085) 225-4444',
    hotline: '911',
    is24Hours: true
  }
];
