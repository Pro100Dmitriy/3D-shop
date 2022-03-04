const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const TokenModel = require('../models/Token')

class TokenService{

    generationToken( payload ){
        const accessToken = jwt.sign( payload, keys.JWT_ACCESS_SECRET, { expiresIn: '10m' } )
        const refreshToken = jwt.sign( payload, keys.JWT_REFRESH_SECRET, { expiresIn: '30d' } )
        return { accessToken, refreshToken }
    }

    validateAccessToken( token ){
        try{
            const userData = jwt.verify( token, keys.JWT_ACCESS_SECRET )
            return userData
        }catch( error ){
            return null
        }
    }

    validateRefreshToken( token ){
        try{
            const userData = jwt.verify( token, keys.JWT_REFRESH_SECRET )
            return userData
        }catch( error ){
            return null
        }
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

    async removeToken( refreshToken ){
        const tokenData = await TokenModel.deleteOne( { refreshToken } )
        return tokenData
    }

    async findToken( refreshToken ){
        const tokenData = await TokenModel.findOne( { refreshToken } )
        return tokenData
    }

}

module.exports = new TokenService()