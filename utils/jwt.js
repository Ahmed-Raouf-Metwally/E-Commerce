const jwt = require( 'jsonwebtoken' );
const { StatusCodes } = require( 'http-status-codes' )


const createJWT = ( { payload } ) =>
{
    const token = jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME } )
    return token;
}

const isTokenValid = ( { token } ) => jwt.verify( token, process.env.JWT_SECRET );

const attachCookiesToResponse = ( { res, user } ) =>
{
    const token = createJWT( { payload: user } );
    const oneDay = 1000 * 60 * 60 * 24;
    const options = {
        expires: new Date( Date.now() + oneDay ),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        sameSite: 'strict',
    };
    res.cookie( 'token', token, options );

}


module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse
}
