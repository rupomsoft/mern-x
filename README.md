# Getting Started with MERN-X

**MERN-X** is a framework designed to simplify building full-stack applications using the MERN stack, which includes **MongoDB**, **Express.js**, **React.js**, and **Node.js**. Follow the steps below to install, run, and manage your MERN-X project easily.

## Installation

To create a new MERN-X project, open your terminal and run the following command:

```bash
npx mern-x@latest
```

If you prefer using **Yarn**, you can use:

```bash
yarn exec mern-x
```

## Running Your Project

### For the Backend (Node.js)

To start the backend server, use the command:

```bash
npm run mern   # This will run the backend on port 3000
```

If you're using **Yarn**, run:

```bash
yarn run mern
```

### For the Complete Project (Frontend + Backend)

To run both the frontend and backend together, use:

```bash
npm run dev    # This will run the complete project on port 3001
```

For **Yarn**, use:

```bash
yarn run dev
```

## Creating Components

You can easily create various parts of your application using simple commands:

### Model: Represents your data structure.

```bash
npm run create:model YourModelName
```

For Yarn:

```bash
yarn run create:model YourModelName
```

### Controller: Handles business logic.

```bash
npm run create:controller YourControllerName
```

For Yarn:

```bash
yarn run create:controller YourControllerName
```

### Middleware: Functions that process requests.

```bash
npm run create:middleware YourMiddlewareName
```

For Yarn:

```bash
yarn run create:middleware YourMiddlewareName
```

### Page: Represents a complete page in your application.

```bash
npm run create:page YourPageName
```

For Yarn:

```bash
yarn run create:page YourPageName
```

### Component: Reusable parts of your UI.

```bash
npm run create:component YourComponentName
```

For Yarn:

```bash
yarn run create:component YourComponentName
```

### Loader: Displays loading states in your app.

```bash
npm run create:loader YourLoaderName
```

For Yarn:

```bash
yarn run create:loader YourLoaderName
```

### Layout: Structure for your pages.

```bash
npm run create:layout YourLayoutName
```

For Yarn:

```bash
yarn run create:layout YourLayoutName
```

## Project Structure

The MERN-X project has a clear and organized folder structure that makes it easy to navigate:

```
mern-x/
│
├── app/
│   ├── config/
│   │   ├── cli.js             # Command-line interface configuration
│   │   ├── config.js          # Main configuration file
│   │
│   ├── controllers/            # Business logic for handling requests
│   │   ├── todoController.js
│   │
│   ├── middlewares/            # Middleware functions for processing requests
│   │   ├── authMiddleware.js
│   │
│   ├── models/                 # Database models for data structure
│   │   ├── todosModel.js
│   │
│   ├── storage/                # Directory for storing files (if needed)
│   │
│   ├── utility/                # Helper functions for various tasks
│   │   ├── emailUtility.js
│   │   ├── tokenUtility.js
│   │   ├── validationUtility.js
│   │
│   ├── dist/                   # Compiled code for distribution
│   │
│   ├── node_modules/           # Installed Node.js modules
│   │
│   ├── public/                 # Public assets like images and fonts
│   │
│   ├── routes/                 # API and web route definitions
│   │   ├── api.js
│   │   ├── web.jsx
│   │
│   ├── views/                  # React components and views
│   │   ├── assets/             # Static assets like CSS files
│   │   │   ├── css/
│   │   │   │   ├── style.js
│   │
│   │   ├── components/         # Reusable React components
│   │   │   ├── CreateForm.jsx
│   │   │   ├── List.jsx
│   │
│   │   ├── layout/             # Layout components for organizing pages
│   │   │   ├── AppLayout.jsx
│   │
│   │   ├── loader/             # Loading components for better user experience
│   │   │   ├── ListLoader.jsx
│   │
│   │   ├── pages/              # Individual pages/components
│   │   │   ├── CreatePage.jsx
│   │   │   ├── ListPage.jsx
│   │
│   │   ├── main.jsx            # Main entry point for React
│   │
│   ├── .gitattributes           # Git attributes file
│   ├── .gitignore               # Files and directories to ignore in Git
│   ├── app.js                   # Entry point of the Node.js application
│   ├── index.html               # Main HTML file
│   ├── LICENSE                  # License information
│   ├── package.json             # Project metadata and dependencies
│   ├── package-lock.json        # Locks the versions of dependencies
│   ├── postcss.config.js        # Configuration for PostCSS
│   ├── README.md                # Documentation for the project
│   ├── tailwind.config.js       # Configuration for Tailwind CSS
│   ├── vite.config.js           # Configuration for Vite
```

## Understanding the Project Structure

- **app/**: Contains the main code for your application.
- **config/**: Holds configuration files for your project.
- **controllers/**: Contains logic for handling requests and responses.
- **middlewares/**: Functions that process incoming requests before reaching the controller.
- **models/**: Represents your data structure and database models.
- **storage/**: For storing files if needed.
- **utility/**: Helper functions for tasks like sending emails or validating data.
- **dist/**: Contains the compiled files for distribution.
- **node_modules/**: Includes all Node.js modules installed through npm.
- **public/**: Contains public assets like images and fonts.
- **routes/**: Defines the routes for your application.
- **views/**: Contains the React components and views for your application, including:
  - **assets/**: Static assets like CSS files.
  - **components/**: Reusable components that can be used throughout your application.
  - **layout/**: Components that define the layout for your pages.
  - **loader/**: Components that show loading states in your app.
  - **pages/**: Individual page components for your application.
- **.gitattributes**: A file to define attributes for Git.
- **.gitignore**: Lists files and directories that Git should ignore.
- **app.js**: The entry point of your Node.js application.
- **index.html**: The main HTML file for your application.
- **LICENSE**: Contains licensing information.
- **package.json**: Metadata and dependencies for your project.
- **package-lock.json**: Locks the versions of the dependencies in your project.
- **postcss.config.js**: Configuration for PostCSS, a tool for transforming CSS.
- **README.md**: Documentation for your project.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **vite.config.js**: Configuration file for Vite, a build tool for modern web projects.

## Additional Resources

For more information on deploying this project on a VPS server, please refer to the following README files:

- [Deployment Guide for Ubuntu VPS](/docs/deploy_mern_x_project.md)
