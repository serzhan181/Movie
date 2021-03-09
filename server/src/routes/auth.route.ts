import { authMiddleware } from './../middlewares/auth.middleware'
import { Router } from 'express'
import { authController } from '../controllers/auth.controller'

const route = Router()

route.post('/register', authController.register)
route.post('/login', authController.login)
route.get('/me', authMiddleware, authController.me)
route.get('/logout', authMiddleware, authController.logout)

export { route }
