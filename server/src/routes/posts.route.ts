import { userMdl } from './../middlewares/user.middleware'
import { Router } from 'express'
import { postsController } from '../controllers/posts.controller'
import { authMdl } from '../middlewares/auth.middleware'

const route = Router()

route.get('/', userMdl, postsController.getPosts)
route.post('/', userMdl, authMdl, postsController.create)
route.get('/:identifier/:slug', postsController.getPost)
route.delete('/delete', userMdl, authMdl, postsController.deletePost)

route.post(
  '/:identifier/:slug/comments',
  userMdl,
  authMdl,
  postsController.commentOnPost
)

export { route }
