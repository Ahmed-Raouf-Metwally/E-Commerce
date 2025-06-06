//express
const express = require("express");
const app = express();

// dotenv
const dotenv = require("dotenv");
dotenv.config();

// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// async errors
// require("express-async-errors"); // Uncomment this line if you want to use express-async-errors for error handling

//database
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// morgan
app.use(morgan("tiny"));

// middleware to parse json
app.use(express.json());
// middleware to parse cookies
app.use(cookieParser(process.env.JWT_SECRET));

// home route
app.get("/", (req, res) => {
  res.send("E-Commerce API");
});
app.get("/api/v1", (req, res) => {
  console.log(req.signedCookies);

  res.send("E-Commerce API");
});
// routes
app.use("/api/v1/auth", authRouter);

// middleware to handle errors
app.use(notFoundMiddleware); // middleware to handle not found routes
app.use(errorHandlerMiddleware); // middleware to handle errors

const port = process.env.PORT || 3000; // port to listen on

// start
const start = async () => {
  try {
    // connect to the database
    await connectDB(process.env.MONGO_URL);
    await app.listen(port, console.log(`Server started on port ${port}...`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start(); // start the server
