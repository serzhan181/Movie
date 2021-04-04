import { authMiddleware } from './../middlewares/auth.middleware'
import { Router } from 'express'
import { misc } from '../controllers/misc.controller'

const route = Router()

route.post('/vote', authMiddleware, misc.vote)

export { route }
