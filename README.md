# TreasureCart E-Commerce Website

TreasureCart is an e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides functionalities for users, sub-admins, and administrators to manage products, orders, and payments.

## Features

- User authentication and authorization (JWT)
- User, sub-admin, and admin roles and permissions
- Product browsing, searching, and filtering
- Shopping cart functionality
- Order management and tracking
- Secure payment gateway integration
- Responsive design for mobile and desktop devices

## Technologies Used

### Backend (Server)

- **Express.js**: Web application framework for Node.js
- **MongoDB Atlas**: Cloud-based MongoDB database service
- **Mongoose**: MongoDB object modeling for Node.js
- **Multer**: Middleware for handling file uploads
- **JWT (JSON Web Tokens)**: Authentication mechanism for securing API endpoints
- **dotenv**: Environment variable management

### Frontend (Client)

- **React.js**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling components
- **React Router**: Routing library for navigation within the React application
- **Axios**: Promise-based HTTP client for making requests to the backend API
- **React Icons**: Library for including popular icon sets in React projects

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas account for database hosting
- Stripe account for payment gateway integration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kobiowuquadri/TreasureCart
   ```
### Navigate to the server directory and install dependencies:


```
cd server
npm install
```

### Create a .env file in the server directory and set the following environment variables:

```
PORT=4000
MONGODB_USERNAME=your-mongodb-username
MONGODB_PASSWORD=your-mongodb-password
```
### Repeat steps 2 and 3 for the client directory.

## Usage
### Start the server:

```
cd server
nodemon index.js
```

### Start the client:

```
cd client
npm run dev
```

```
Access the application in your web browser at http://localhost:5173.
```

## Contributing
Contributions are welcome! Please follow the contribution guidelines.

## License
This project is licensed under the MIT License.