# Firebase CORS Configuration Instructions

Follow these steps to set up your Firebase token and run the workflow:

## 1. Get a Firebase CI Token

1. Open your terminal
2. Run the following command:
   ```
   firebase login:ci
   ```
3. This will open a browser window. Log in with your Firebase account
4. After successful login, you'll receive a token in your terminal. Copy this token.

## 2. Add the Token to GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" in the left sidebar
4. Click on "Actions"
5. Click on "New repository secret"
6. Name: `FIREBASE_TOKEN`
7. Value: Paste the token you copied earlier
8. Click "Add secret"

## 3. Run the Workflow

1. Go to the "Actions" tab in your GitHub repository
2. Click on "Update Firebase Storage CORS Settings" workflow
3. Click "Run workflow"
4. Wait for the workflow to complete

## 4. Alternative: Manual Command

If you prefer to run the command locally:

1. Save the cors.json file in your project
2. In your terminal, make sure you're in the project directory
3. Run:
   ```
   firebase storage:cors update cors.json --project kingcp-a0065
   ```

## Verification

After running the workflow or command, you can verify that CORS is working by:

1. Trying to upload a file in your application
2. Checking the browser console for any CORS errors

If you still see CORS errors, wait a few minutes as changes might take time to propagate. 