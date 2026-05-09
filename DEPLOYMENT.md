# 🚀 Deployment Guide - Route Butuan

This guide will help you deploy Route Butuan to production.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free tier works)
- Firebase project already configured

## 📦 Prepare for Deployment

### 1. Build the Project Locally

Test that everything builds correctly:

```bash
npm run build
```

If the build succeeds, you're ready to deploy!

### 2. Environment Variables

The Firebase configuration is already hardcoded in the app at `lib/firebase/config.ts`. No additional environment variables are needed for basic deployment.

## 🌐 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option A: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `justin12285/NEW-STARTUP`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your app will be live at: `https://your-project.vercel.app`
   - Vercel provides automatic HTTPS and CDN

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🔥 Deploy to Firebase Hosting

Firebase Hosting is great for serving static sites with Firebase integration.

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Firebase Hosting

```bash
firebase init hosting
```

Select these options:
- **Project:** Select `new-startup-cdbde`
- **Public directory:** `out`
- **Single-page app:** Yes
- **GitHub integration:** Optional

### 4. Update package.json

Add export script:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

### 5. Build and Deploy

```bash
npm run build
firebase deploy --only hosting
```

Your app will be live at: `https://new-startup-cdbde.web.app`

## 🐙 GitHub Repository Setup

### 1. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/justin12285/NEW-STARTUP.git
```

### 3. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## 🔧 Post-Deployment Configuration

### 1. Update Firebase Security Rules

Go to Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read routes, terminals, landmarks
    match /routes/{routeId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /terminals/{terminalId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /landmarks/{landmarkId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Community reports
    match /community_reports/{reportId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
  }
}
```

### 2. Enable Firebase Authentication Methods

1. Go to Firebase Console → Authentication → Sign-in method
2. Enable:
   - Email/Password
   - Google

### 3. Add Authorized Domains

In Firebase Console → Authentication → Settings → Authorized domains:
- Add your Vercel domain: `your-project.vercel.app`
- Add your custom domain if you have one

## 🌍 Custom Domain Setup

### For Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### For Firebase:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Update your DNS records

## 📊 Monitoring and Analytics

### Vercel Analytics

Vercel provides built-in analytics:
- Go to your project dashboard
- Click "Analytics" tab
- View traffic, performance, and errors

### Firebase Analytics

Already configured in the app with `measurementId: "G-E2K6ZDS9T9"`

View analytics at: Firebase Console → Analytics

## 🔒 Security Checklist

- ✅ Firebase security rules configured
- ✅ Authentication methods enabled
- ✅ Authorized domains added
- ✅ HTTPS enabled (automatic with Vercel/Firebase)
- ✅ Environment variables secured (if any)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Firebase Authentication Not Working

1. Check authorized domains in Firebase Console
2. Verify Firebase config in `lib/firebase/config.ts`
3. Check browser console for errors

### Map Not Loading

1. Ensure Leaflet CSS is imported
2. Check browser console for errors
3. Verify coordinates are valid

## 📱 Testing Production Build

Before deploying, test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test.

## 🎉 Deployment Complete!

Your Route Butuan app is now live!

**Live URLs:**
- Vercel: https://new-startup-jvl0azvtv-justin12285s-projects.vercel.app
- Firebase: https://new-startup-cdbde.web.app
- GitHub: https://github.com/justin12285/NEW-STARTUP

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Firebase documentation](https://firebase.google.com/docs)
3. Check the [Vercel documentation](https://vercel.com/docs)

---

**Happy Deploying! 🚀**
