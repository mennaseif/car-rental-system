🚗 Car Rental System
This project is a car rental system where users can rent cars and manage customers, cars, and rentals through a set of CRUD APIs. The system ensures that cars marked as rented cannot be rented again until they are returned.

✨ Features
🚘 Car Management
Create, Read, Update, Delete (CRUD) operations on cars.
Cars have fields like:
name: Name of the car.
model: Model of the car.
rentalStatus: Either 'available' or 'rented'.
👤 Customer Management
Create, Read, Update, Delete (CRUD) operations on customers.
Customer fields include:
name: Full name of the customer.
password: Password for authentication.
email: Contact email.
phone: Phone number.
📅 Rental Management
Create, Read, Update, Delete (CRUD) operations on rentals.
Each rental is associated with a Car and a Customer.
Rental fields:
rentalDate: Date when the car was rented.
returnDate: Date when the car was returned (if applicable).

🔍 Special Features
Ensure a car cannot be rented if its status is marked as 'rented' until it’s returned.
Query options to filter cars:
🚗 Cars by specific models (Honda and Toyota).
🛑 Available cars of a specific model.
🚙 Cars that are rented or of a specific model.
✅ Available cars of specific models or rented cars of a specific model.

🛠️ API Endpoints
🧑‍💼 User APIs
Signup: POST /users/signup - Register a new user.
Sign in: POST /users/signin - Login for existing users.
Get specific user: GET /users/:id - Fetch details of a specific user.
Get all users: GET /users - List all users.
Update user (owner only): PUT /users/:id - Update the logged-in user's details.
Delete user (owner only): DELETE /users/:id - Delete the logged-in user's account.
🚗 Car APIs
Add a car: POST /cars - Add a new car.
Get specific car: GET /cars/:id - Get details of a specific car.
Get all cars: GET /cars - List all cars.
Update a car: PUT /cars/:id - Update a car’s details.
Delete a car: DELETE /cars/:id - Delete a car.
📅 Rental APIs
Create a rental: POST /rentals - Create a new rental.
Update a rental: PUT /rentals/:id - Update rental details.
Delete a rental: DELETE /rentals/:id - Delete a rental.
Get all rentals: GET /rentals - List all rentals.
Get specific rental: GET /rentals/:id - Get details of a specific rental.
🔧 Special APIs
Get cars by model (Honda or Toyota): GET /cars?model=Honda&model=Toyota
Get available cars by model: GET /cars?model=SomeModel&status=available
Get rented or specific model cars: GET /cars?model=SomeModel&status=rented
Get available cars of specific models or rented cars of a model: GET /cars?models=ModelA,ModelB&status=available

🛠️ Technologies Used
Node.js: Backend framework.
Express.js: Web framework for building REST APIs.
MongoDB: Database for storing data, using Mongoose for object modeling.
Postman: For API documentation and testing.

🚀 How to Run
Clone the repository:
bash
Copy code
git clone https://github.com/mennaseif/car-rental-system.git
Install dependencies:
bash
Copy code
npm install
Set up environment variables (MongoDB URI, JWT secret, etc.) in a .env file.
Start the server:
bash
Copy code
npm start
Test the APIs using Postman or any other API client.

🔮 Future Enhancements
🔍 Add search functionality for cars.
🛡️ Implement additional user roles (e.g., Admin).
✉️ Add email verification for customer accounts.
