import { userMdl } from './../middlewares/user.middleware'
import { authMdl } from './../middlewares/auth.middleware'
import { Router } from 'express'
import { misc } from '../controllers/misc.controller'

const route = Router()

route.post('/vote', userMdl, authMdl, misc.vote)

export { route }
