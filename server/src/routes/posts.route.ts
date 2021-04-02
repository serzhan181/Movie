import { Router } from 'express'
import { postsController } from '../controllers/posts.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

const route = Router()

route.get('/', postsController.getPosts)
route.post('/', authMiddleware, postsController.create)
route.get('/:identifier/:slug', postsController.getPost)
route.delete('/delete', authMiddleware, postsController.deletePost)

route.post(
  '/:identifier/:slug/comments',
  authMiddleware,
  postsController.commentOnPost
)

export { route }
