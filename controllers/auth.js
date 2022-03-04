const errorHandler = require("../utils/errorHandler")
const UserService = require('../service/user-service')
const keys = require('../config/keys')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error')

// module.exports.login = async function( req, res ){
//     const candidate = await User.findOne({
//         email: req.body.email
//     })

//     if( candidate ){
//         const passwordResult = bcrypt.compareSync( req.body.password, candidate.password )

//         if( passwordResult ){
//             const token = jwt.sign({
//                 email: candidate.email,
//                 userId: candidate._id
//             }, keys.jwt, {
//                 expiresIn: 60 * 60
//             })

//             res.status( 200 ).json({
//                 token: `Bearer ${token}`
//             })
//         }else{
//             res.status( 401 ).json({
//                 message: 'Incorrent password'
//             })
//         }
//     }else{
//         res.status( 404 ).json({
//             message: 'User not found'
//         })
//     }
// }


// module.exports.register = async function( req, res ){
//     const candidate = await User.findOne({
//         email: req.body.email
//     })
    
//     if( candidate ){
//         res.status( 409 ).json({
//             message: 'This email is exist'
//         })
//     }else{

//         const salt = bcrypt.genSaltSync(10)
//         const password = req.body.password
//         const user = new User({
//             email: req.body.email,
//             password: bcrypt.hashSync( password, salt )
//         })

//         try{
//             await user.save()
//             res.status( 201 ).json( user )
//         }catch( error ){
//             // Error
//         }

//     }
// }

class AuthController{

    async login( req, res, next ){
        try{
            const { email, password } = req.body
            console.log( 1 )
            const userData = await UserService.login( email, password )
            res.cookie( 'refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true } )
            res.status( 200 ).json( userData )
        }catch( error ){
            next( error )
        }
    }

    async registration( req, res, next ){
        try{
            const errors = validationResult( req )
            if( !errors.isEmpty() ){
                return next( ApiError.BadRrequest( 'Validation error', errors.array() ) )
            }

            const { email, password } = req.body
            const userData = await UserService.registration( email, password )
            res.cookie( 'refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true } )
            res.status( 200 ).json( userData )
        }catch( error ){
            next( error )
        }
    }

    async logout( req, res, next ){
        try{
            const { refreshToken } = req.cookies
            const token = await UserService.logout( refreshToken )
            res.clearCookie( 'refreshToken' )
            return res.json( token )
        }catch( error ){
            next( error )
        }
    }

    async activate( req, res, next ){
        try{
            const activationLink = req.params.link
            await UserService.activate( activationLink )
            return res.redirect( keys.CLIENT_URL )
        }catch( error ){
            next( error )
        }
    }

    async refresh( req, res, next ){
        try{
            const { refreshToken } = req.cookies
            const userData = await UserService.refresh( refreshToken )
            res.cookie( 'refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true } )
            res.status( 200 ).json( userData )
        }catch( error ){
            
        }
    }

    async getUsers( req, res, next ){
        try{
            const users = await UserService.getAllUsers()
            return res.json( users )
        }catch( error ){
            next( error )
        }
    }

}

module.exports = new AuthController()