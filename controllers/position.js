const Position = require('../models/Position')
const errorHandler = require("../utils/errorHandler")

module.exports.getByCategoryId = async function( req, res ){
    try{
        const positions = await Position.find({
            category: req.params.categoryId
        })
        res.status( 200 ).json( positions )
    }catch( error ){
        errorHandler( res, error )
    }
}


module.exports.getAll = async function( req, res ){
    const limit = req.query.limit ?? null
    try{
        const positions = await Position.find().limit( limit )
        res.status( 200 ).json( positions )
    }catch( error ){
        errorHandler( res, error )
    }
}


module.exports.create = async function( req, res ){
    try{
        const thumbnail = req.files.thumbnail.map( thumb => { if( thumb.path ) return thumb.path } )
        const image = req.files.image.map( file => { if( file.path ) return file.path } )
        const sizes = req.body.sizes.replace(/(<([^>]+)>)/gi, "").trim().split( ',' )
        const position = await new Position({
            name: req.body.name,
            description: req.body.description,
            cost: req.body.cost,
            sizes,
            category: req.body.category,
            thumbnail,
            image
        }).save()
        res.status( 201 ).json( position )
    }catch( error ){
        errorHandler( res, error )
    }
}


module.exports.remove = async function( req, res ){
    try{

    }catch( error ){
        errorHandler( res, error )
    }
}


module.exports.update = async function( req, res ){
    try{

    }catch( error ){
        errorHandler( res, error )
    }
}