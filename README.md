# Hotel Finder App

This is a full-stack Hotel Finder app where users can search for hotels and view their details. The frontend is built with React and TypeScript, while the backend is built with Node.js, and Express.

## Technologies Used:
- **Frontend:**
  - React (with TypeScript)
  - Axios (for API requests)
  - React Router (for routing)
  
- **Backend:**
  - Node.js
  - Express
  - Axios (for making HTTP requests)
  - Nodemon (for automatic server restarts)

## Prerequisites:
Before running the app, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (Node package manager)


## 1. Set up the frontend:

- Navigate to the frontend directory:

-  ```bash
- cd frontend

- npm install
- npm start

## 2. Set up the backend:
- Navigate to the backend directory:
- cd backend
- Install the backend dependencies:
- npm install
- npm run dev
- Nodemon 

## 3. Ensure both frontend and backend are running:
The frontend should be accessible at http://localhost:3000.
The backend should be accessible at http://localhost:5000.

## 4. Interacting with the App:
The frontend allows users to search for hotels and displays hotel details fetched from the backend.
The backend provides an API endpoint to fetch hotel data:
Endpoint: /api/hotels
Endpoint: /api/hotels:id

## 5. Stopping the Servers:
To stop the servers, press Ctrl+C in the terminal where the frontend and backend are running.