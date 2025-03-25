#!/bin/bash

# Deploy script for King Competition Portal

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Change to project root
cd "$(dirname "$0")/.."

# Ensure we're on the main branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
  echo "❌ Not on main branch. Please checkout main branch first."
  exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes from remote..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
cd frontend
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Make sure 404.html is copied to dist
echo "📄 Copying 404.html to dist..."
cp public/404.html dist/

# Deploy to GitHub Pages manually if needed
echo "✅ Build completed successfully."
echo "The GitHub Actions workflow should automatically deploy the changes."
echo "If you need to deploy manually, you can use:"
echo "  git push origin main"

echo "🎉 Done!" 