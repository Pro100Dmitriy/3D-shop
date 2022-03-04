const Router = require('express').Router
const router = new Router()
const AuthController = require('../controllers/auth')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')

router.post( '/login', AuthController.login )
router.post( '/registration', body('email').isEmail(), body('password').isLength( { min: 3, max: 32 } ) , AuthController.registration )
router.post( '/logout', AuthController.logout )
router.get( '/activate/:link', AuthController.activate )
router.get( '/refresh', AuthController.refresh )
router.get( '/users', authMiddleware, AuthController.getUsers )

module.exports = router