// Sample Routes Data for Butuan City
import { Route } from '../types';

export const SAMPLE_ROUTES: Route[] = [
  {
    id: 'route-1',
    route_name: 'Robinsons - SM Butuan',
    route_code: 'R1',
    vehicle_type: 'jeepney',
    city: 'Butuan City',
    origin: 'Robinsons Place Butuan',
    destination: 'SM City Butuan',
    stops: [
      {
        name: 'Robinsons Place Butuan',
        landmark: 'Main Entrance',
        coordinates: { lat: 8.9475, lng: 125.5406 },
        order: 1
      },
      {
        name: 'Guingona Park',
        landmark: 'City Park',
        coordinates: { lat: 8.9472, lng: 125.5428 },
        order: 2
      },
      {
        name: 'J.C. Aquino Avenue',
        landmark: 'Near Gaisano',
        coordinates: { lat: 8.9420, lng: 125.5350 },
        order: 3
      },
      {
        name: 'SM City Butuan',
        landmark: 'Main Entrance',
        coordinates: { lat: 8.9369, lng: 125.5289 },
        order: 4
      }
    ],
    fare: 15,
    estimated_time: 20,
    operating_hours: {
      start: '05:00',
      end: '21:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    color: '#FFD700',
    route_coordinates: [
      { lat: 8.9475, lng: 125.5406 },
      { lat: 8.9472, lng: 125.5428 },
      { lat: 8.9420, lng: 125.5350 },
      { lat: 8.9369, lng: 125.5289 }
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'route-2',
    route_name: 'Langihan - CSU',
    route_code: 'R2',
    vehicle_type: 'jeepney',
    city: 'Butuan City',
    origin: 'Langihan Terminal',
    destination: 'Caraga State University',
    stops: [
      {
        name: 'Langihan Terminal',
        coordinates: { lat: 8.9556, lng: 125.5361 },
        order: 1
      },
      {
        name: 'Libertad Market',
        landmark: 'Public Market',
        coordinates: { lat: 8.9503, lng: 125.5383 },
        order: 2
      },
      {
        name: 'Robinsons Butuan',
        landmark: 'Shopping Mall',
        coordinates: { lat: 8.9475, lng: 125.5406 },
        order: 3
      },
      {
        name: 'Ampayon',
        coordinates: { lat: 8.9750, lng: 125.5320 },
        order: 4
      },
      {
        name: 'Caraga State University',
        landmark: 'Main Gate',
        coordinates: { lat: 8.9889, lng: 125.5294 },
        order: 5
      }
    ],
    fare: 20,
    estimated_time: 35,
    operating_hours: {
      start: '05:00',
      end: '20:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    color: '#FF6B6B',
    route_coordinates: [
      { lat: 8.9556, lng: 125.5361 },
      { lat: 8.9503, lng: 125.5383 },
      { lat: 8.9475, lng: 125.5406 },
      { lat: 8.9750, lng: 125.5320 },
      { lat: 8.9889, lng: 125.5294 }
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'route-3',
    route_name: 'Bancasi Airport - City Center',
    route_code: 'R3',
    vehicle_type: 'multicab',
    city: 'Butuan City',
    origin: 'Bancasi Airport',
    destination: 'Robinsons Place Butuan',
    stops: [
      {
        name: 'Bancasi Airport',
        landmark: 'Arrival Area',
        coordinates: { lat: 8.9515, lng: 125.4788 },
        order: 1
      },
      {
        name: 'Bancasi',
        coordinates: { lat: 8.9500, lng: 125.4950 },
        order: 2
      },
      {
        name: 'Golden Ribbon',
        landmark: 'Bakery',
        coordinates: { lat: 8.9485, lng: 125.5200 },
        order: 3
      },
      {
        name: 'Robinsons Place Butuan',
        landmark: 'Main Entrance',
        coordinates: { lat: 8.9475, lng: 125.5406 },
        order: 4
      }
    ],
    fare: 25,
    estimated_time: 25,
    operating_hours: {
      start: '05:00',
      end: '22:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    color: '#4ECDC4',
    route_coordinates: [
      { lat: 8.9515, lng: 125.4788 },
      { lat: 8.9500, lng: 125.4950 },
      { lat: 8.9485, lng: 125.5200 },
      { lat: 8.9475, lng: 125.5406 }
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'route-4',
    route_name: 'FSUU - SM Butuan',
    route_code: 'R4',
    vehicle_type: 'multicab',
    city: 'Butuan City',
    origin: 'Father Saturnino Urios University',
    destination: 'SM City Butuan',
    stops: [
      {
        name: 'FSUU Main Gate',
        coordinates: { lat: 8.9478, lng: 125.5444 },
        order: 1
      },
      {
        name: 'Guingona Park',
        coordinates: { lat: 8.9472, lng: 125.5428 },
        order: 2
      },
      {
        name: 'Gaisano Mall',
        coordinates: { lat: 8.9494, lng: 125.5367 },
        order: 3
      },
      {
        name: 'SM City Butuan',
        landmark: 'Main Entrance',
        coordinates: { lat: 8.9369, lng: 125.5289 },
        order: 4
      }
    ],
    fare: 12,
    estimated_time: 15,
    operating_hours: {
      start: '06:00',
      end: '21:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    color: '#95E1D3',
    route_coordinates: [
      { lat: 8.9478, lng: 125.5444 },
      { lat: 8.9472, lng: 125.5428 },
      { lat: 8.9494, lng: 125.5367 },
      { lat: 8.9369, lng: 125.5289 }
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
