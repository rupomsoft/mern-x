
# Deploying Your MERN-X Project on Vercel

Deploying a MERN-X project on Vercel allows you to host your application with ease, providing scalability and seamless management. This guide will help you set up your MERN-X project on Vercel.

## Prerequisites
- A Vercel account (sign up if you don't have one).
- Vercel CLI installed on your local machine.
- A GitHub, GitLab, or Bitbucket repository containing your MERN-X project.
- A MongoDB connection (either via MongoDB Atlas or your own instance).

## Step 1: Install Vercel CLI
To install the Vercel CLI globally, run the following command in your terminal:

```bash
npm install -g vercel
```

## Step 2: Log in to Vercel
Once installed, log in to your Vercel account:

```bash
vercel login
```

## Step 3: Set Up Your MERN-X Project
If you haven’t already, you can set up a new MERN-X project using the following command:

```bash
npx mern-x@latest
```

This will create a MERN-X project in a new directory.

## Step 4: Navigate to Your Project Directory
Go into the newly created project folder:

```bash
cd mern-x
```

## Step 5: Install Project Dependencies
Install all necessary dependencies for your project:

```bash
npm install
```

## Step 6: Configure Your Project
Before deployment, update your project configuration. Open the `config.js` file and modify the necessary values:

```bash
nano app/config/config.js
```

Replace the placeholder values:

```javascript
export const MONGODB_CONNECTION = "your_mongodb_connection_string"; // Update your MongoDB connection
export const JWT_SECRET = "your_jwt_secret"; // Update your JWT secret
export const EMAIL_HOST = "your_email_host"; // Set your email host if needed
export const EMAIL_PORT = your_email_port; // Set your email port if needed
export const EMAIL_USER = "your_email_user"; // Set your email user
export const EMAIL_PASSWORD = "your_email_password"; // Set your email password
export const PORT = 3000; // Update the port if necessary
```

## Step 7: Configure Vercel with `vercel.json`
Create a `vercel.json` file in the root of your project to specify how Vercel should route requests. For example:

```json
{
  "version": 2,
  "rewrites": [
    { "source": "/(.*)", "destination": "/app/config/cli.js" }
  ]
}
```

## Step 8: Update `package.json`
Ensure your `package.json` file has the correct scripts for starting your application. Highlight the new script added as follows:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "mern": "node app/config/cli.js run:mernx",
  "start": "npm run mern", // **New script added**
  "create:model": "node app/config/cli.js make:model",
  "create:controller": "node app/config/cli.js make:controller",
  "create:middleware": "node app/config/cli.js make:middleware",
  "create:page": "node app/config/cli.js make:page",
  "create:component": "node app/config/cli.js make:component",
  "create:loader": "node app/config/cli.js make:loader",
  "create:layout": "node app/config/cli.js make:layout"
}
```

## Step 9: Test Locally with Vercel CLI
You can simulate a Vercel deployment locally before pushing the project live. Run the following command:

```bash
vercel dev
```

This will prompt some questions. Default responses will work, and your local server will run at `http://localhost:3000`.

## Step 10: Deploy Your Project
To deploy your MERN-X project to Vercel, use the following command:

```bash
vercel
```

Follow the prompts to select your project, and Vercel will automatically upload and build your app.

## Step 11: Access Your Application
Once the deployment is complete, Vercel will provide a live URL for your application, making it publicly accessible.

## Additional Resources
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Vercel Documentation](https://vercel.com/docs)
