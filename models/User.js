const mongoose  = require( "mongoose" );

const UserSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [ true, "Please enter your name" ],
        minLength: [ 3, "Name must be at least 3 characters" ],
        maxLength: [ 50, "Name must not be more than 50 characters" ],
    },
    email: {
        type: String,
        required: [ true, "Please enter your email" ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, "Please enter your password" ],
        minLength: [ 6, "Password must be at least 6 characters" ],
        maxLength: [ 64, "Password must not be more than 64 characters" ],
    },
    // Add a field for the user's role
    role: {
        type: String,
        enum: [ "user", "admin" ],
        default: "user",
    }
    
} )

// Create a model from the schema
const User = mongoose.model( "User", UserSchema );

module.exports = User;