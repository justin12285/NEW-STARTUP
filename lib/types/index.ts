// Type Definitions for Route Butuan

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  isStudent?: boolean;
  savedRoutes?: string[];
  recentSearches?: string[];
  createdAt: Date;
  settings?: UserSettings;
}

export interface UserSettings {
  darkMode: boolean;
  notifications: boolean;
  language: string;
}

export interface Route {
  id: string;
  route_name: string;
  route_code: string;
  vehicle_type: 'jeepney' | 'multicab' | 'bus' | 'van';
  city: string;
  origin: string;
  destination: string;
  stops: Stop[];
  fare: number;
  estimated_time: number; // in minutes
  operating_hours: OperatingHours;
  color: string;
  route_coordinates: Coordinate[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Stop {
  name: string;
  landmark?: string;
  coordinates: Coordinate;
  order: number;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface OperatingHours {
  start: string; // "05:00"
  end: string;   // "21:00"
  days: string[]; // ["Monday", "Tuesday", ...]
}

export interface Terminal {
  id: string;
  name: string;
  type: 'jeepney' | 'multicab' | 'bus' | 'van';
  coordinates: Coordinate;
  address: string;
  routes: string[]; // route IDs
  facilities: string[];
  operating_hours: OperatingHours;
  contact?: string;
  photos?: string[];
}

export interface Landmark {
  id: string;
  name: string;
  type: 'school' | 'mall' | 'hospital' | 'government' | 'terminal' | 'other';
  coordinates: Coordinate;
  address: string;
  description?: string;
  nearbyRoutes?: string[];
}

export interface EmergencyLocation {
  id: string;
  name: string;
  type: 'hospital' | 'police' | 'fire_station' | 'barangay_hall' | 'pharmacy';
  coordinates: Coordinate;
  address: string;
  contact: string;
  hotline?: string;
  is24Hours: boolean;
}

export interface CommuteLog {
  id: string;
  userId: string;
  origin: string;
  destination: string;
  routes: string[];
  totalFare: number;
  totalTime: number;
  timestamp: Date;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'alert' | 'maintenance';
  affectedRoutes?: string[];
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
}

export interface CommunityReport {
  id: string;
  userId: string;
  type: 'wrong_fare' | 'traffic' | 'route_suggestion' | 'terminal_photo' | 'other';
  routeId?: string;
  description: string;
  photos?: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface CommuteStep {
  step: number;
  instruction: string;
  vehicle_type: string;
  route_name?: string;
  fare: number;
  landmark?: string;
  distance?: string;
}

export interface CommutePlan {
  origin: string;
  destination: string;
  steps: CommuteStep[];
  totalFare: number;
  totalTime: number;
  totalDistance: string;
}
