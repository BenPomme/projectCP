#!/bin/bash

# Create CORS configuration file
cat > cors.json << EOL
[
  {
    "origin": ["https://benpomme.github.io"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Content-Disposition", "Content-Length"]
  }
]
EOL

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Login to Firebase if not already logged in
firebase login

# Update CORS settings
echo "Updating Firebase Storage CORS settings..."
firebase storage:cors update cors.json --project kingcp-a0065

# Cleanup
rm cors.json

echo "CORS settings updated successfully!" 