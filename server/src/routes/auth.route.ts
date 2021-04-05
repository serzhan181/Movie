import { authMdl } from './../middlewares/auth.middleware'
import { userMdl } from './../middlewares/user.middleware'
import { Router } from 'express'
import { authController } from '../controllers/auth.controller'

const route = Router()

route.post('/register', authController.register)
route.post('/login', authController.login)
route.get('/me', userMdl, authMdl, authController.me)
route.get('/logout', userMdl, authMdl, authController.logout)

export { route }
