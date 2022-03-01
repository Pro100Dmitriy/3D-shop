const express = require('express')
const upload = require('../middleware/upload')
const controller = require('../controllers/position')
const router = express.Router()

router.get( '/:categoryId', controller.getByCategoryId )
router.get( '/?', controller.getAll )
router.post( '/', upload.fields([ {name: 'thumbnail', maxCount: 2}, {name: 'image', maxCount: 10} ]), controller.create )
router.delete( '/:id', controller.remove )
router.patch( '/:id', controller.update )

module.exports = router