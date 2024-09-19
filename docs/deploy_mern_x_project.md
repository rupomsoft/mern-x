
# Deploying Your MERN-X Project on an Ubuntu VPS

Deploying a MERN-X project on a Virtual Private Server (VPS) allows you to host your application with greater control and scalability. This guide will help you set up your MERN-X project on an Ubuntu server.

## Prerequisites
- A VPS with Ubuntu (preferably Ubuntu 20.04 or later).
- SSH access to your server.
- Node.js and npm installed on your VPS.
- MongoDB installed and configured (either on the same server or a separate one).

## Step 1: Connect to Your VPS
Open your terminal and connect to your VPS via SSH:
```bash
ssh username@your_vps_ip
```
Replace `username` with your VPS username and `your_vps_ip` with your VPS IP address.

## Step 2: Update the System
Before proceeding, update your package list and upgrade existing packages:
```bash
sudo apt update
sudo apt upgrade -y
```

## Step 3: Install Node.js and npm
If you haven't installed Node.js and npm, use the following commands:
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```
Verify the installation:
```bash
node -v
npm -v
```

## Step 4: Allow Ports for Your Application
To allow the required ports for your application (e.g., 3000 for the backend and 3001 for the frontend), use the following commands:

### Open the Firewall
If you are using `ufw` (Uncomplicated Firewall), run:
```bash
sudo ufw allow 3000
sudo ufw allow 3001
```

### Check the Status of the Firewall
To confirm that the rules were added, check the firewall status:
```bash
sudo ufw status
```
Ensure it shows that ports 3000 and 3001 are allowed.

## Step 5: Clone Your MERN-X Project
To create a new MERN-X project, use the following command:
```bash
npx mern-x@latest
```
This command will set up a new MERN-X project in a folder named `mern-x` (or another name you specify).

## Step 6: Navigate to Your Project Directory
Change into the newly created project directory:
```bash
cd mern-x
```

## Step 7: Install Project Dependencies
Install the required dependencies for your project:
```bash
npm install
```

## Step 8: Configure Your Project
Before starting your application, you may need to change the configuration settings in the `app/config/config.js` file. Here’s how:

### Edit the Configuration File
Open the `config.js` file:
```bash
nano app/config/config.js
```
Make sure to update the following settings as needed:
```javascript
export const MONGODB_CONNECTION = "your_mongodb_connection_string"; // Update your MongoDB connection string
export const JWT_SECRET = "your_jwt_secret"; // Update your JWT secret
export const EMAIL_HOST = "your_email_host"; // Set your email host if needed
export const EMAIL_PORT = your_email_port; // Set your email port if needed
export const EMAIL_USER = "your_email_user"; // Set your email user if needed
export const EMAIL_PASSWORD = "your_email_password"; // Set your email password if needed
export const PORT = 3000; // Set the port if needed
```
Save the changes and exit the editor (Ctrl + X, then Y, then Enter).

## Step 9: Start Your Application
You can start your application using the following command for the backend:
```bash
npm run mern
```
Or for both frontend and backend:
```bash
npm run dev
```

## Step 10: Using a Process Manager (Optional)
To keep your application running in the background, consider using a process manager like `pm2`. Install `pm2` globally:
```bash
sudo npm install -g pm2
```
Then start your application with `pm2`:
```bash
pm2 start app.js --name "mern-x"
pm2 startup
pm2 save
```
This ensures that your application restarts on server reboots.

## Step 11: Access Your Application
Now you can access your application using your VPS IP address and the appropriate port in your web browser:

- For the backend: `http://your_vps_ip:3000`
- For the complete project: `http://your_vps_ip:3001`

## Additional Resources
- [Official MongoDB Documentation](https://docs.mongodb.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
