
# E-Commerce API 🛒

This project is a robust **E-Commerce API** built with Node.js, Express, and MongoDB. It provides backend services for managing users, products, orders, reviews, and authentication with security features, making it an excellent starting point for e-commerce applications.

---

## Hosted Project 🌐

The project is hosted on Render and can be accessed here:  
**[E-Commerce API Render URL](https://node-course-e-commerce.onrender.com/)**

---

## Features 🌟

- **User Authentication & Authorization:**  
  Supports secure registration, login, and role-based access control using JWT.

- **Product Management:**  
  Full CRUD operations for products, including images and categories.

- **Order Management:**  
  Enables users to create, view, and update orders.

- **Review System:**  
  Allows users to add and manage product reviews.

- **Security Features:**  
  Uses Helmet, CORS, Express Rate Limiter, and MongoDB Sanitize for a secure environment.

---

## Project Structure 📂

```bash
e-commerce-api/
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── orderController.js
│   └── reviewController.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Order.js
│   └── Review.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── reviewRoutes.js
├── utils/
│   ├── createTokenUser.js
│   ├── attachCookiesToResponse.js
│   └── checkPermissions.js
├── app.js
├── .env
├── package.json
└── README.md
```

---

## Prerequisites ✅

Ensure you have the following installed:

- **Node.js** (v14+)
- **npm** (Node Package Manager)
- **MongoDB** (Locally or via MongoDB Atlas)

---

## Installation & Setup 🔧

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Ahmed-Raouf-Metwally/e-commerce-api.git
   cd e-commerce-api
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set up Environment Variables**  
   Create a `.env` file in the root directory and configure:
   ```bash
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=1d
   ```

4. **Run the Development Server**  
   ```bash
   npm run dev
   ```

---

## API Endpoints 📡

### **Authentication**
- **POST** `/api/v1/auth/register`  
  Register a new user.
  
- **POST** `/api/v1/auth/login`  
  Login and get a JWT.

- **GET** `/api/v1/auth/logout`  
  Logout and clear the cookie.

---

### **Products**
- **GET** `/api/v1/products`  
  Retrieve all products.

- **POST** `/api/v1/products`  
  Create a new product (Admin only).

- **PATCH** `/api/v1/products/:id`  
  Update a product (Admin only).

- **DELETE** `/api/v1/products/:id`  
  Delete a product (Admin only).

---

### **Orders**
- **POST** `/api/v1/orders`  
  Create a new order.

- **GET** `/api/v1/orders`  
  Retrieve all orders (Admin only).

- **GET** `/api/v1/orders/:id`  
  Get a specific order.

---

## Technologies Used 🛠️

- **Node.js:** Server-side runtime environment.
- **Express:** Minimal and flexible Node.js web framework.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM library for MongoDB.
- **JWT:** Secure token-based authentication.
- **bcryptjs:** Password hashing.
- **dotenv:** Manage environment variables.
- **Helmet, CORS, and XSS Clean:** Security enhancements.

---

## Future Enhancements 🚀

- Implement a frontend using React.js.
- Add payment gateway integration (Stripe/PayPal).
- Enable image uploads to cloud storage (AWS S3).
- Add a product search and filter feature.

---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact 📧

**Ahmed Abdul Raouf Metwally**  
GitHub: [Ahmed-Raouf-Metwally](https://github.com/Ahmed-Raouf-Metwally)  
LinkedIn: [Ahmed Abdul Raouf](https://www.linkedin.com/in/ahmed-abdul-raouf/)
