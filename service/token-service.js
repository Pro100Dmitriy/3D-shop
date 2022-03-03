const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const TokenModel = require('../models/Token')

class TokenService{

    generationToken( payload ){
        const accessToken = jwt.sign( payload, keys.jwt, { expiresIn: '30m' } )
        const refreshToken = jwt.sign( payload, keys.jwt, { expiresIn: '30d' } )
        return { accessToken, refreshToken }
    }

    async saveToken( userId, refreshToken ){
        const tokenData = await TokenModel.findOne( { user: userId } ) // Thinck hear
        if( tokenData ){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }else{
            const token = await TokenModel.create( { user: userId, refreshToken } )
            return token
        }
    }

}

module.exports = new TokenService()