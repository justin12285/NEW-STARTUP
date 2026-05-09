# 🔧 Git Setup Guide - Route Butuan

Quick guide to set up Git and push to GitHub.

## 📦 Initial Setup

### 1. Initialize Git (if not already done)

```bash
cd route-butuan
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Create Initial Commit

```bash
git commit -m "Initial commit: Route Butuan - Complete transportation navigation platform"
```

## 🔗 Connect to GitHub

### Option A: New Repository

If you haven't created the repository yet:

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `NEW-STARTUP` or `route-butuan`
4. Don't initialize with README (we already have one)
5. Click "Create Repository"

Then run:

```bash
git remote add origin https://github.com/justin12285/NEW-STARTUP.git
git branch -M main
git push -u origin main
```

### Option B: Existing Repository

If the repository already exists:

```bash
git remote add origin https://github.com/justin12285/NEW-STARTUP.git
git branch -M main
git push -u origin main --force
```

## 📝 Commit Messages Guide

Use clear, descriptive commit messages:

```bash
# Feature additions
git commit -m "feat: Add interactive map with Leaflet"
git commit -m "feat: Implement trip planner with fare calculator"

# Bug fixes
git commit -m "fix: Resolve map marker clustering issue"
git commit -m "fix: Correct fare calculation for transfers"

# UI improvements
git commit -m "ui: Improve mobile navigation menu"
git commit -m "ui: Add dark mode support"

# Documentation
git commit -m "docs: Update README with deployment instructions"
git commit -m "docs: Add API documentation"

# Refactoring
git commit -m "refactor: Optimize route search algorithm"
git commit -m "refactor: Extract map component logic"
```

## 🌿 Branching Strategy

### Main Branch
```bash
# Always keep main branch stable
git checkout main
```

### Feature Branches
```bash
# Create feature branch
git checkout -b feature/real-time-tracking

# Work on feature...
git add .
git commit -m "feat: Add real-time bus tracking"

# Push feature branch
git push origin feature/real-time-tracking

# Merge to main (after testing)
git checkout main
git merge feature/real-time-tracking
git push origin main
```

### Hotfix Branches
```bash
# Create hotfix branch
git checkout -b hotfix/map-loading-issue

# Fix the issue...
git add .
git commit -m "fix: Resolve map loading timeout"

# Merge to main
git checkout main
git merge hotfix/map-loading-issue
git push origin main
```

## 🔄 Common Git Commands

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### View Commit History
```bash
git log --oneline
```

### Pull Latest Changes
```bash
git pull origin main
```

### Push Changes
```bash
git push origin main
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Discard Local Changes
```bash
git checkout -- .
```

## 🏷 Tagging Releases

### Create Version Tags
```bash
# Tag current version
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial production release"

# Push tags
git push origin --tags

# List tags
git tag -l
```

### Version Numbering
- **v1.0.0** - Initial production release
- **v1.1.0** - Minor features added
- **v1.1.1** - Bug fixes
- **v2.0.0** - Major update

## 📋 .gitignore

Already configured to ignore:

```
node_modules/
.next/
.env*.local
.vercel
*.log
.DS_Store
```

## 🚀 Deploy from Git

### Vercel (Automatic)
1. Push to GitHub
2. Vercel auto-deploys from main branch
3. Every push triggers new deployment

### Firebase
```bash
# Build and deploy
npm run build
firebase deploy
```

## 🔐 Sensitive Data

**Never commit:**
- `.env.local` files
- API keys (unless public like Firebase config)
- User data
- Private keys

**Safe to commit:**
- Firebase public configuration (already in code)
- Sample data
- Documentation
- Public assets

## 👥 Collaboration

### Clone Repository
```bash
git clone https://github.com/justin12285/NEW-STARTUP.git
cd NEW-STARTUP
npm install
```

### Create Pull Request
1. Fork the repository
2. Create feature branch
3. Make changes
4. Push to your fork
5. Open Pull Request on GitHub

### Code Review Process
1. Submit PR with clear description
2. Wait for review
3. Address feedback
4. Merge when approved

## 📊 GitHub Actions (Optional)

Create `.github/workflows/deploy.yml` for CI/CD:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
```

## 🐛 Troubleshooting

### Large Files Error
```bash
# Remove large files from history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch path/to/large/file' \
  --prune-empty --tag-name-filter cat -- --all
```

### Merge Conflicts
```bash
# View conflicts
git status

# Edit conflicted files
# Then:
git add .
git commit -m "Resolve merge conflicts"
```

### Reset to Remote
```bash
# Discard all local changes
git fetch origin
git reset --hard origin/main
```

## 📝 Commit Template

Create `.gitmessage` template:

```
# Type: feat|fix|docs|style|refactor|test|chore
# Scope: component|page|api|config
# Subject: Brief description

# Body: Detailed explanation (optional)

# Footer: Issue references (optional)
# Closes #123
```

Use it:
```bash
git config commit.template .gitmessage
```

## ✅ Pre-Commit Checklist

Before committing:
- [ ] Code builds successfully (`npm run build`)
- [ ] No console errors
- [ ] Tested on mobile and desktop
- [ ] Updated documentation if needed
- [ ] Removed debug code
- [ ] Meaningful commit message

## 🎉 You're Ready!

Your Route Butuan project is now version controlled and ready for collaboration!

### Quick Reference

```bash
# Daily workflow
git pull origin main          # Get latest changes
# ... make changes ...
git add .                     # Stage changes
git commit -m "description"   # Commit
git push origin main          # Push to GitHub
```

---

**Happy Coding! 🚀**
