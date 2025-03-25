const { Storage } = require('@google-cloud/storage');

// Initialize the storage client with the service account key
const storage = new Storage({
  keyFilename: './kingcp-a0065-firebase-adminsdk-fbsvc-f9a6f9f073.json',
});

// Set the CORS configuration for the bucket
async function setCorsConfiguration() {
  try {
    // First attempt with the correct bucket name from .env
    const bucketName = 'kingcp-portal.appspot.com';
    console.log(`Attempting to set CORS configuration for bucket: ${bucketName}`);
    
    const [corsResponse] = await storage.bucket(bucketName).setCorsConfiguration([
      {
        maxAgeSeconds: 3600,
        method: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
        origin: ['https://benpomme.github.io'],
        responseHeader: ['Content-Type', 'Content-Disposition', 'Content-Length'],
      },
    ]);
    
    console.log('CORS configuration set successfully for bucket:', bucketName);
    console.log('CORS Response:', corsResponse);
    
  } catch (error) {
    console.error('Error setting CORS configuration:', error);
    
    try {
      // Try with alternative bucket name format (without appspot.com)
      const altBucketName = 'kingcp-portal';
      console.log(`Attempting with alternative bucket name: ${altBucketName}`);
      
      const [corsResponse] = await storage.bucket(altBucketName).setCorsConfiguration([
        {
          maxAgeSeconds: 3600,
          method: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
          origin: ['https://benpomme.github.io'],
          responseHeader: ['Content-Type', 'Content-Disposition', 'Content-Length'],
        },
      ]);
      
      console.log('CORS configuration set successfully for bucket:', altBucketName);
      console.log('CORS Response:', corsResponse);
      
    } catch (altError) {
      console.error('Error with alternative bucket name:', altError);
    }
  }
}

setCorsConfiguration(); 