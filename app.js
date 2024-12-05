//express
const express = require( 'express' )
const app = express()

// dotenv
const dotenv = require( 'dotenv' )
dotenv.config()

// rest of the packages
const morgan = require( 'morgan' )

// async errors
require( 'express-async-errors' )

//database
const connectDB = require( './db/connect' )

//routers
const authRouter = require( './routes/authRoutes' )

// middleware
const notFoundMiddleware = require( './middleware/not-found' )
const errorHandlerMiddleware = require( './middleware/error-handler' )

app.use( morgan( 'tiny' ) )

// middleware to parse json
app.use( express.json() )

// home route
app.get( '/', ( req, res ) =>
{
    res.send( 'E-Commerce API' )
} )

// routes
app.use( '/api/v1/auth', authRouter )

// middleware to handle errors
app.use( notFoundMiddleware ) // middleware to handle not found routes
app.use( errorHandlerMiddleware ) // middleware to handle errors

const port = process.env.PORT || 3000 // port to listen on

// start
const start = async () =>
{
    try
    {
        await connectDB( process.env.MONGO_URL )
        await app.listen( port, console.log( `Server started on port ${ port }...` ) )
    } catch ( error )
    {
        console.error( error )
        process.exit( 1 )
    }
}
start() // start the server
