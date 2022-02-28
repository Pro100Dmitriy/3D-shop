const Category = require('../models/Category')
const Position = require('../models/Position')

module.exports.getAll = async function( req, res ){
    try{
        const categories = await Category.find()
        res.status( 200 ).json( categories )
    }catch( error ){

    }
}


module.exports.getById = async function( req, res ){
    try{
        const category = await Category.findById( req.params.id )
        res.status( 200 ).json( category )
    }catch( error ){
        
    }
}


module.exports.remove = async function( req, res ){
    try{
        await Category.remove( { _id: req.params.id } )
        //await Position.remove( { category: req.params.id } )
        res.status( 200 ).json({
            message: 'Category removed'
        })
    }catch( error ){
        
    }
}


module.exports.create = async function( req, res ){
    const category = new Category({
        name: req.body.name,
        imageSrc: req.file ? req.file.path : ''
    })

    try{
        await category.save()
        res.status( 201 ).json( category )
    }catch( error ){
        
    }
}


module.exports.update = function( req, res ){
    try{

    }catch( error ){
        
    }
}