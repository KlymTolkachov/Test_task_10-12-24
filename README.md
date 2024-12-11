# Project Name

Country Info App

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: npm is bundled with Node.js
- **Git**: [Download and install Git](https://git-scm.com/)

## Setup Instructions

This project consists of both a **frontend** and a **server**. Follow the instructions below to set up and run both parts of the project.

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd server/country-info-app
   ```

2. **Install dependencies:**
   Use npm to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the backend server:**
   Once the dependencies are installed and the .env file is configured, start the backend server:

    ```bash
    npm run start
    ```


###  Frontend Setup

1. **Navigate to the frontend directory:**

      ```bash
      cd frontend
     ```

2. **Install dependencies:
   Use npm to install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the frontend app:
   Once the dependencies are installed and the .env file is configured, start the frontend app:

    ```bash
    npm run dev
    ```


Additional Notes

	•	Frontend: The frontend is built using Vite, which will run the app on http://localhost:5173 (or the specified port).
	•	Backend: The backend is an Express server that will run on http://localhost:5001 (or the specified port).
	•	Make sure that both servers are running to ensure the frontend and backend can communicate correctly.


Troubleshooting

	•	Issue 1: If the backend doesn’t start, ensure that your .env file is correctly configured and that the API URLs are accessible.
	•	Issue 2: If the frontend cannot communicate with the backend, ensure that the VITE_BASE_URL variable is set correctly in the .env file in the frontend directory.