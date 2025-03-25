#!/bin/bash

# Create a temporary CORS configuration file
cat > cors-config.json << EOL
[
  {
    "origin": ["https://benpomme.github.io"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Content-Disposition", "Content-Length"]
  }
]
EOL

echo "CORS configuration file created. Now setting CORS on the bucket..."

# Try with the correct bucket name format
echo "Attempting to set CORS on kingcp-a0065.firebasestorage.app..."
gsutil cors set cors-config.json gs://kingcp-a0065.firebasestorage.app

echo "CORS configuration completed. You can verify by running:"
echo "gsutil cors get gs://kingcp-a0065.firebasestorage.app"

# Clean up
echo "Cleaning up temporary files..."
rm cors-config.json

echo "Done!" 