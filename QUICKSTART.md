# 🚀 Quick Start Guide - Route Butuan

Get Route Butuan up and running in 5 minutes!

## ⚡ Fast Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to [http://localhost:3000](http://localhost:3000)

That's it! 🎉

## 📱 What You'll See

### Landing Page (/)
- Beautiful hero section with animations
- Feature showcase
- Popular routes
- Call-to-action buttons

### Interactive Map (/map)
- Full Butuan City map with Leaflet
- Routes, terminals, and landmarks
- Layer controls
- Search functionality

### Trip Planner (/planner)
- Enter origin and destination
- Get step-by-step directions
- Fare estimates
- Travel time

### All Routes (/routes)
- Browse all available routes
- Filter by vehicle type
- Search routes
- Route details

### Emergency (/emergency)
- Emergency hotlines
- Nearby hospitals
- Police stations
- Fire stations

### Authentication
- Login (/login)
- Register (/register)
- Google Sign-In
- Email/Password

## 🔥 Firebase Already Configured

The app is pre-configured with Firebase:
- ✅ Authentication enabled
- ✅ Firestore database ready
- ✅ Storage configured
- ✅ Realtime database set up

No additional Firebase setup needed!

## 🎨 Features to Try

1. **Explore the Map**
   - Click on markers to see details
   - Toggle different layers
   - View route overlays

2. **Plan a Trip**
   - Try: "Robinsons" to "SM Butuan"
   - Get instant directions
   - See fare breakdown

3. **Browse Routes**
   - Filter by jeepney, multicab, bus
   - Search for specific routes
   - View operating hours

4. **Create Account**
   - Sign up with email
   - Or use Google Sign-In
   - Save favorite routes

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📂 Key Files to Know

```
route-butuan/
├── app/
│   ├── page.tsx              # Landing page
│   ├── map/page.tsx          # Interactive map
│   ├── planner/page.tsx      # Trip planner
│   └── routes/page.tsx       # All routes
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── layout/               # Navbar, Footer
│   └── map/                  # Map component
├── lib/
│   ├── firebase/config.ts    # Firebase setup
│   ├── constants/            # Sample data
│   └── types/                # TypeScript types
```

## 🎯 Sample Data Included

The app comes with sample data:
- 4 routes covering major destinations
- 7 landmarks (malls, schools, terminals)
- 3 terminals
- 4 emergency locations

## 🚀 Deploy in 1 Click

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click "Deploy"

Done! Your app is live.

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 💡 Tips

- **Dark Mode**: Click the moon icon in navbar
- **Mobile**: Fully responsive, try on your phone
- **Maps**: Click markers for detailed info
- **Routes**: Use the search to find specific routes
- **Emergency**: Save emergency numbers in your phone

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Map Not Loading

- Check internet connection (needs OpenStreetMap)
- Clear browser cache
- Check browser console for errors

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Leaflet Maps](https://leafletjs.com/)

## 🎉 You're Ready!

Start exploring Route Butuan and customize it for your needs!

**Need help?** Check the main [README.md](./README.md) for detailed documentation.

---

**Made with ❤️ for Butuan City**
