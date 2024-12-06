const mongoose = require( "mongoose" );
const validator = require( "validator" );
const bcrypt = require( "bcryptjs" );

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
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Please enter a valid email"
        },
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

// Create a method to hash the password before saving
UserSchema.pre( "save", async function ()
{
    const salt = await bcrypt.genSalt( 10 );
    this.password = await bcrypt.hash( this.password, salt );
} );

// Create a method to compare the password with the hashed password
UserSchema.methods.comparePassword = async function ( candidatePassword )
{
    const isMatch = await bcrypt.compare( candidatePassword, this.password );
    return isMatch;
}

// Create a model from the schema
const User = mongoose.model( "User", UserSchema );

module.exports = User;