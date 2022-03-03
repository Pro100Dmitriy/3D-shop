const UserModel = require('../models/User')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')
const MailService = require('./mail-service')
const TokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const keys = require('../config/keys')
const ApiError = require('../exceptions/api-error')

class UserService{

    async registration( email, password ){
        const candidate = await UserModel.findOne({ email })

        if( candidate ){
            throw ApiError.BadRrequest( `User with ${ email } is created!` )
        }else{
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = await bcrypt.hash( password, salt )
            const activationLink = uuid.v4()

            const user = await UserModel.create({ email, password: hashPassword, activationLink })
            await MailService.sendActivationMail( email, `${ keys.API_URL }/api/activate/${ activationLink }` )

            const userDto = new UserDto( user ) // id, email, isActivated 
            const tokens = TokenService.generationToken( { ...userDto } )
            await TokenService.saveToken( userDto.id, tokens.refreshToken )

            return { ...tokens, user: userDto }
        }

    }

    async activate( activationLink ){
        const user = await UserModel.findOne( {activationLink} )

        if( !user ){
            throw ApiError.BadRrequest( 'Activation link uncorrected' )
        }else{
            user.isActivated = true
            await user.save()
        }
    }

}

module.exports = new UserService()