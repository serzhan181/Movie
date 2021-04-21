import { userMdl } from './../middlewares/user.middleware'
import { Router } from 'express'
import { posts } from '../controllers/posts.controller'
import { authMdl } from '../middlewares/auth.middleware'

const route = Router()

route.get('/', userMdl, posts.getPosts)
route.post('/', userMdl, authMdl, posts.create)
route.get('/:identifier/:slug', userMdl, posts.getPost)
route.delete('/delete', userMdl, authMdl, posts.deletePost)

route.post('/:identifier/:slug/comments', userMdl, authMdl, posts.commentOnPost)
route.get('/:identifier/:slug/comments', userMdl, posts.getPostComments)
route.delete('/:postId/:slug/:commentId', userMdl, authMdl, posts.deleleComment)

export { route }
