const Router = require('express').Router
const router = new Router()
const AuthController = require('../controllers/auth')

router.post( '/login', AuthController.login )
router.post( '/registration', AuthController.registration )
router.post( '/loguot', AuthController.logout )
router.get( '/activate/:link', AuthController.activate )
router.get( '/refresh', AuthController.refresh )
router.get( '/users', AuthController.getUsers )

module.exports = router