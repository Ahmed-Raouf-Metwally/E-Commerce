const User = require( '../models/User' )
const { StatusCodes } = require( 'http-status-codes' )
const CustomError = require( '../errors' )
const jwt = require( 'jsonwebtoken' )
const { createJWT, isTokenValid, attachCookiesToResponse } = require( '../utils' )

const register = async ( req, res ) =>
{
    const { name, email, password } = req.body

    const emailAlreadyExist = await User.findOne( { email } )
    if ( emailAlreadyExist )
    {
        throw new CustomError.BadRequestError( 'Email already exist' )
    }

    // first registered user is an admin
    const isFirstAccount = await User.countDocuments( {} ) === 0
    const role = isFirstAccount ? 'admin' : 'user'

    const user = await User.create( { name, email, password, role } )

    const tokenUser = { name: user.name, userId: user._id, role: user.role }
    attachCookiesToResponse( { res, user: tokenUser } )
    res.status( StatusCodes.CREATED ).json( { user: tokenUser } )

}

const login = async ( req, res ) =>
{
    const { email, password } = req.body
    if ( !email || !password )
    {
        throw new CustomError.BadRequestError( 'Please provide both email and password' )
    }
    const user = await User.findOne( { email } )
    if ( !user )
    {
        throw new CustomError.UnauthenticatedError( 'Invalid credentials' )
    }
    const isPasswordCorrect = await user.comparePassword( password )
    if ( !isPasswordCorrect )
    {
        throw new CustomError.UnauthenticatedError( 'Invalid credentials' )
    }
    const tokenUser = { name: user.name, userId: user._id, role: user.role }
    attachCookiesToResponse( { res, user: tokenUser } )
    res.status( StatusCodes.CREATED ).json( { user: tokenUser } )    
    
}

const logout = async ( req, res ) =>
{
    res.send( "Logout" );
}

module.exports = {
    register,
    login,
    logout
}