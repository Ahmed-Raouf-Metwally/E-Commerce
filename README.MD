## Hosted Project

[E-Commerce API Render URL](https://node-course-e-commerce.onrender.com/)

#### Setup Basic Express Server

- [x] import express and assign to variable
- [x] setup start port variable (5000) and start function

#### Connect To DB

- [x] get connection string
- [x] setup .env with MONGO_URL variable and assign the value
- [x] import 'dotenv' and setup package
- [x] import connect() and invoke in the starter
- [x] restart the server
- [x] mongoose V6 info

#### Basic Routes and Middleware

- [x] setup / GET Route
- [x] setup express.json() middleware
- [x] setup 404 and errorHandler middleware
- [x] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### Morgan Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)

#### User Model

- [x] create models folder and User.js file
- [x] create schema with name,email, password (all type:String)
- [x] export mongoose model

#### Validator Package

- [Validator](https://www.npmjs.com/package/validator)

#### Auth Routes Structure

- [x] create controllers folder
- [x] add authController file
- [x] export (register,login,logout) functions
- [x] res.send('some string value')
- [x] create routes folder
- [x] setup authRoutes file
- [x] import all controllers
- [x] setup three routes
- [x] post('/register') post('/login') get('/logout')
- [x] import authRoutes as authRouter in the app.js
- [x] setup app.use('/api/v1/auth', authRouter)

#### Test Routes in Postman

#### Register Controller

- [] create user
- [] send response with entire user (only while testing)
- [] check if email already in use (schema and controller)
- [] ignore 'role'
- [] alternative 'admin' setup

#### Handle Password

- [] UserSchema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

#### JWT

- [] require 'jsonwebtoken' package
- [] create jwt - jwt.sign(payload,secret,options)
- [] verify jwt - jwt.verify(token,secret)
- [] add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME=1d
- [] restart the server !!!!
- [] refactor code, create jwt functions in utils
- [] refactor cookie code
- [] setup func attachCookiesToResponse
- [] accept payload(res, tokenUser)
- [] create token, setup cookie
- [] optionally send back the response

#### Login Route

- [] check if email and password exist, if one missing return 400
- [] find user, if no user return 401
- [] check password, if does not match return 401
- [] if everything is correct, attach cookie
  and send back the same response as in register

#### Logout Route

- [] set token cookie equal to some string value
- [] set expires:new Date(Date.now())

#### User Routes Structure

- [] add userController file
- [] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions
- [] res.send('some string value')
- [] setup userRoutes file
- [] import all controllers
- [] setup just one route - router.route('/').get(getAllUsers);
- [] import userRoutes as userRouter in the app.js
- [] setup app.use('/api/v1/users', userRouter)

#### GetAllUsers and GetSingleUser

- [] Get all users where role is 'user' and remove password
- [] Get Single User where id matches id param and remove password
- [] If no user 404

#### Authenticate User Setup

#### Auth User Complete

#### Authorize Permissions Setup

- [] hardcode

#### Authorize Permissions Complete

- [] introduce params

#### ShowCurrentUser

- [] get user from req
- [] send response with user

#### UpdateUserPassword

- [] almost identical to login user
- [] add authenticateUser middleware in the route
- [] check for oldPassword and newPassword in the body
- [] if one missing 400
- [] look for user with req.user.userId
- [] check if oldPassword matches with user.comparePassword
- [] if no match 401
- [] if everything good set user.password equal to newPassword
- [] await user.save()

#### createTokenUser in Utils

- [] create a file in utils (createTokenUser)
- [] setup a function that accepts user object and returns userToken object
- [] export as default
- [] setup all the correct imports/exports and refactor existing code

#### updateUser with User.findOneAndUpdate()

- [] add authenticateUser middleware in the route
- [] check for name and email in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndUpdate()
- [] create token user, attachCookiesToResponse and send back the tokenUser

#### updateUser with user.save()

#### Setup and Apply checkPermissions()

#### Product Model

- [] create Product.js in models folder
- [] create Schema
- [] name : {type:String}
- [] price: {type:Number}
- [] description: {type:String}
- [] image: {type:String}
- [] category: {type:String}
- [] company: {type:String}
- [] colors: {type:[]}
- [] featured: {type:Boolean}
- [] freeShipping: {type:Boolean}
- [] inventory:{type:Number}
- [] averageRating:{type:Number}
- [] user
- [] set timestamps
- [] export Product model

#### Product Structure

- [] add productController file in controllers
- [] export (createProduct, getAllProducts,
  getSingleProduct, updateProduct, deleteProduct, uploadImage) functions
- [] res.send('function name')
- [] setup productRoutes file in routes
- [] import all controllers
- [] only getAllProducts and getSingleProduct accessible to public
- [] rest only by admin (setup middlewares)
- [] typical setup
- [] router.route('/uploadImage').post(uploadImage)
- [] import productRoutes as productRouter in the app.js
- [] setup app.use('/api/v1/products', productRouter)

#### Product Routes in Postman

#### Create Product

- [] create user property on req.body and set it equal to userId (req.user)
- [] pass req.body into Product.create
- [] send back the product

#### Remaining Controllers (apart from uploadImage)

- [] getAllProducts
- [] getSingleProduct
- [] updateProduct
- [] deleteProduct
- [] typical CRUD, utilize (task or job) project
- [] remember we check already for role 'admin'

#### Upload Image

- [] if some question, re-watch 07-file-upload
- [] images folder with two images

#### Review Model

- [] create Review.js in models folder
- [] create Schema
- [] rating : {type:Number}
- [] title: {type:String}
- [] comment: {type:String}
- [] user
- [] product
- [] set timestamps
- [] export Review model

#### Review Structure

- [] add reviewController file in controllers
- [] export (createReview, getAllReviews, getSingleReview, updateReview, deleteReview) functions
- [] res.send('function name')
- [] setup reviewRoutes file in routes
- [] import all controllers
- [] only getAllReviews and getSingleReview accessible to public
- [] rest only to users (setup middleware)
- [] typical REST setup
- [] import reviewRoutes as reviewRouter in the app.js
- [] setup app.use('/api/v1/reviews', reviewRouter)

#### Create Review

- [] check for product in the req.body
- [] attach user property (set it equal to req.user.userId) on to req.body
- [] create review
- [] don't test yet

#### Get All Reviews and Get Single Review

- [] both public routes, typical setup

#### Delete Review

- [] get id from req.params
- [] check if review exists
- [] if no review, 404
- [] check permissions (req.user, review.user)
- [] use await review.remove()
- [] send back 200

#### Update Review

- [] get id from req.params
- [] get {rating, title comment} from req.body
- [] check if review exists
- [] if no review, 404
- [] check permissions
- [] set review properties equal to rating, title, comment
- [] use await review.save()
- [] send back 200

#### Populate

#### Virtuals

#### Get Single Product Reviews

#### Remove All Reviews

#### Aggregation Pipeline - Atlas and Code

#### Order Schema

- [] create Order.js in models folder
- [] create Schema
- [] tax : {type:Number}
- [] shippingFee: {type:Number}
- [] subtotal: {type:Number}
- [] total: {type:Number}
- [] orderItems:[]
- [] status:{type:String}
- [] user
- [] clientSecret:{type:String}
- [] paymentId:{type:String}
- [] set timestamps
- [] export Order model

#### Order Structure

- [] add orderController file in controllers
- [] export (getAllOrders, getSingleOrder, getCurrentUserOrders,
  createOrder, updateOrder) functions
- [] res.send('function name')
- [] setup orderRoutes file in routes
- [] import all controllers
- [] authenticate user in all routes
- [] getAllOrders admin only
- [] typical REST setup
- [] router.route('/showAllMyOrders').get(getCurrentUserOrders)
- [] import orderRoutes as orderRouter in the app.js
- [] setup app.use('/api/v1/orders', orderRouter)

#### Order in Postman

#### Create Order

- [] most complex

#### Get All Orders and Get Single Order

- [] getAllOrders - admin only
- [] getSingleOrder - chechPermissions

#### Get Current User Orders

- [] find orders where user is equal to req.user.userId

#### Update Order

- [] get order id
- [] get paymentIntentId (req.body)
- [] get order
- [] if does not exist - 404
- [] check permissions
- [] set paymentIntentId and status as 'paid'
- [] order.save()

#### Create Docs

- [] [Docgen Library] (https://github.com/thedevsaddam/docgen)
- [] Export Postman Collection
- [] docgen build -i fileName.json -o index.html
- [] create index.html in public

#### Security Packages

- [] express-rate-limiter
- [] helmet
- [] xss-clean
- [] express-mongo-sanitize
- [] cors (cookies!!!!)

#### Deploy on Heroku

- [] heroku account and heroku cli
- [] remove/copy from the main repo
- [] add dev command "nodemon app.js"
- [] change start to "node app.js"
- [] setup node version in package.json
- [] "engines": {"node": "14.x"}
- [] Procfile "web: node app.js"
- [] remove existing git repo
- [] rm -rf .git - mac,
- [] git init
- [] git add .
- [] git commit -m "initial commit"
- [] heroku login
- [] heroku create "App Name"
- [] git remote -v
- [] setup env vars in GUI
- [] git push heroku master/main

<!-- 
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
LinkedIn: [Ahmed Abdul Raouf](https://www.linkedin.com/in/ahmed-abdul-raouf/) -->
