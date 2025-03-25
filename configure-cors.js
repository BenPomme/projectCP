const { exec } = require('child_process');
const fs = require('fs');

// Create the CORS config file
const corsConfig = [
  {
    "origin": ["https://benpomme.github.io"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Content-Disposition", "Content-Length"]
  }
];

fs.writeFileSync('cors.json', JSON.stringify(corsConfig, null, 2));

// Initialize Firebase project
console.log('Setting up Firebase project...');
exec('firebase use kingcp-a0065', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error selecting project: ${error.message}`);
    return;
  }
  
  console.log('Project selected:', stdout);
  
  // Try to set CORS using Firebase functions
  console.log('Attempting to update CORS settings via Firebase...');
  
  // Generate temporary Firebase function to update CORS
  const functionCode = `
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.setupCors = functions.https.onRequest(async (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    
    await bucket.setCorsConfiguration([
      {
        "origin": ["https://benpomme.github.io"],
        "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
        "maxAgeSeconds": 3600,
        "responseHeader": ["Content-Type", "Content-Disposition", "Content-Length"]
      }
    ]);
    
    res.status(200).send('CORS configuration updated successfully');
  } catch (error) {
    console.error('Error updating CORS:', error);
    res.status(500).send('Error updating CORS: ' + error.message);
  }
});
  `;
  
  // Create a temporary functions directory
  if (!fs.existsSync('./temp-functions')) {
    fs.mkdirSync('./temp-functions');
  }
  
  // Create function files
  fs.writeFileSync('./temp-functions/index.js', functionCode);
  fs.writeFileSync('./temp-functions/package.json', JSON.stringify({
    "name": "cors-updater",
    "version": "1.0.0",
    "description": "Temporary function to update CORS",
    "main": "index.js",
    "dependencies": {
      "firebase-admin": "^11.9.0",
      "firebase-functions": "^4.4.0"
    },
    "engines": {
      "node": "18"
    }
  }, null, 2));
  
  console.log('Temporary function created. Deploy with:');
  console.log('cd temp-functions && firebase deploy --only functions');
  console.log('Then visit the function URL in your browser to update CORS');
}); 