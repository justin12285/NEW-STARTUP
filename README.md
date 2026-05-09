# 🚍 ROUTE BUTUAN

**Tagline:** *Know where to ride in Butuan*

A production-ready transportation and commute navigation platform for Butuan City, Philippines. Built with modern web technologies to help students, workers, and travelers navigate the city efficiently.

![Route Butuan](https://img.shields.io/badge/Status-Production%20Ready-green)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-Integrated-orange)

## 🌟 Features

### Core Features
- **Interactive Map** - Explore Butuan City with detailed routes, terminals, and landmarks
- **Smart Route Planning** - Get step-by-step directions with fare estimates
- **Real-time Updates** - Traffic alerts, route closures, and schedule changes
- **Emergency Services** - Quick access to hospitals, police stations, and hotlines
- **Community Driven** - Users can suggest routes and report issues
- **Mobile Optimized** - Seamless experience on all devices

### User Features
- User authentication (Email/Password & Google Sign-In)
- Save favorite routes
- Recent search history
- Dark mode support
- Personalized profile
- Student-friendly interface

### Map Features
- Jeepney, multicab, bus, and van routes
- Major landmarks (malls, schools, hospitals)
- Terminals and stops
- Emergency locations
- Route overlays with color coding
- Interactive markers with detailed information

## 🛠 Tech Stack

### Frontend
- **Next.js 16.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Leaflet** - Interactive maps
- **Zustand** - State management

### Backend
- **Firebase Authentication** - User management
- **Firestore** - NoSQL database
- **Firebase Storage** - File storage
- **Firebase Realtime Database** - Real-time data sync

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Beautiful icon library
- **Custom Components** - Reusable UI elements

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase account

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/justin12285/NEW-STARTUP.git
cd route-butuan
```

2. **Install dependencies**
```bash
npm install
```

3. **Firebase Configuration**

The project is already configured with Firebase. The configuration is in `lib/firebase/config.ts`:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyB5_5N_Zut-NpmyxC4f2uJBaWtL0XLQ0q8",
  authDomain: "new-startup-cdbde.firebaseapp.com",
  projectId: "new-startup-cdbde",
  storageBucket: "new-startup-cdbde.firebasestorage.app",
  messagingSenderId: "52937884928",
  appId: "1:52937884928:web:2fafa5090a3be6612edfe5",
  measurementId: "G-E2K6ZDS9T9",
  databaseURL: "https://new-startup-cdbde-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [Vercel](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js
- Click "Deploy"

**Live URL:** https://new-startup-jvl0azvtv-justin12285s-projects.vercel.app

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
firebase init hosting
```

4. **Build and deploy**
```bash
npm run build
firebase deploy
```

**Live URL:** https://new-startup-cdbde.web.app

## 📁 Project Structure

```
route-butuan/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Landing page
│   ├── map/                 # Interactive map
│   ├── routes/              # All routes listing
│   ├── planner/             # Trip planner
│   ├── emergency/           # Emergency services
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   └── layout.tsx           # Root layout
├── components/              # Reusable components
│   ├── ui/                  # UI components
│   ├── layout/              # Layout components
│   └── map/                 # Map components
├── lib/                     # Utilities and configs
│   ├── firebase/            # Firebase configuration
│   ├── store/               # Zustand stores
│   ├── types/               # TypeScript types
│   ├── constants/           # Constants and data
│   └── utils/               # Helper functions
└── public/                  # Static assets
```

## 🗺 Sample Data

The project includes sample data for:
- **4 Routes** covering major destinations
- **7 Landmarks** including malls, schools, and terminals
- **3 Terminals** (Langihan, Bus Terminal, Libertad Market)
- **4 Emergency Locations** (hospitals, police, fire station)

### Sample Routes
1. **Robinsons - SM Butuan** (Jeepney, ₱15, 20 min)
2. **Langihan - CSU** (Jeepney, ₱20, 35 min)
3. **Bancasi Airport - City Center** (Multicab, ₱25, 25 min)
4. **FSUU - SM Butuan** (Multicab, ₱12, 15 min)

## 🔐 Authentication

### Email/Password
- User registration with email verification
- Secure password authentication
- Password reset functionality

### Google Sign-In
- One-click Google authentication
- Automatic profile creation
- Seamless user experience

## 📱 Pages

- **/** - Landing page with features showcase
- **/map** - Interactive map with routes and landmarks
- **/routes** - Browse all available routes
- **/planner** - Plan your trip with step-by-step directions
- **/emergency** - Emergency services and hotlines
- **/login** - User login
- **/register** - User registration
- **/profile** - User profile (protected)

## 🎨 Design System

### Colors
- **Primary:** Green (#10B981)
- **Secondary:** Emerald (#059669)
- **Accent:** Various for different vehicle types
- **Dark Mode:** Full support

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, large sizes
- **Body:** Regular, readable sizes

### Components
- Glassmorphism cards
- Smooth animations
- Responsive layouts
- Accessible UI elements

## 🔥 Firebase Collections

### users
```typescript
{
  uid: string
  email: string
  displayName: string
  isStudent: boolean
  savedRoutes: string[]
  recentSearches: string[]
  createdAt: Date
  settings: {
    darkMode: boolean
    notifications: boolean
    language: string
  }
}
```

### routes
```typescript
{
  id: string
  route_name: string
  route_code: string
  vehicle_type: 'jeepney' | 'multicab' | 'bus' | 'van'
  origin: string
  destination: string
  stops: Stop[]
  fare: number
  estimated_time: number
  operating_hours: OperatingHours
  color: string
  route_coordinates: Coordinate[]
  isActive: boolean
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Developer:** Route Butuan Team
- **Contact:** support@routebutuan.com
- **Location:** Butuan City, Agusan del Norte, Philippines

## 🙏 Acknowledgments

- OpenStreetMap for map data
- Firebase for backend services
- Vercel for hosting
- The Butuan City community

## 📞 Support

For support, email support@routebutuan.com or visit our website.

---

**Made with ❤️ for Butuan City**

*Know where to ride in Butuan*
