## Next Level Assignment-2

### This project is a Node.js application that provides an API for managing products and orders.

[![Live Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://assignment2-fawn-seven.vercel.app/)

### Features

- CRUD operations for products
- Order creation and fetching
- Inventory management
- input validation using Joi
- Custom error handling for not found routes

### Installation

1. Clone the repository:
2. Install the dependencies:
3. Create a .env file in the root directory and add your MongoDB connection string:
4. Start the server:

```sh
git clone https://github.com/devmasud1/assignment-2.git
cd assignment2
npm install
npm run start:dev
```

For production environments...

```sh
PORT=5000
DB_URL=your_mongodb_connection_string
```

Run for locally
[localhost:](http://localhost:5000/):(http://localhost:5000/)

Run for production
[live-ste:](https://assignment2-fawn-seven.vercel.app/):(https://assignment2-fawn-seven.vercel.app/)

## API Endpoints

### Products

- GET /api/products: Get all products
- GET /api/products/:id: Get a single product by ID
- POST /api/products: Create a new product
- PUT /api/products/:id: Update a product by ID
- DELETE /api/products/:id: Delete a product by ID

### Orders

- GET /api/orders: Get all orders or orders by email (use query parameter ?email=email@example.com)
- POST /api/orders: Create a new order

### Validation

This project uses Joi for validating incoming data for product and order creation and updating operations. Validation errors will be handled gracefully and meaningful error messages will be provided in the API responses.

### Error Handling

- 404 Not Found: If a route does not exist, the API will return a 404 error with a message: { "success": false, "message": "Route not found" }
- Insufficient Quantity Error: When the ordered quantity exceeds the available inventory, the API will return a 400 error with a message: { "success": false, "message": "Insufficient quantity available in inventory" }
- Invalid ID Error: When an invalid ID is provided, the API will return a 404 error with a message: { "success": false, "message": "Order not found" }
