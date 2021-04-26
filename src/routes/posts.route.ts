import { userMdl } from './../middlewares/user.middleware'
import { Router } from 'express'
import { posts } from '../controllers/posts.controller'
import { authMdl } from '../middlewares/auth.middleware'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { makeid } from '../helpers/makeId'

const route = Router()

route.get('/', userMdl, posts.getPosts)

const postImgUpload = multer({
  storage: multer.diskStorage({
    destination: 'public/images/posts',
    filename: (_, filename, cb) => {
      const name = makeid(7)
      cb(null, name + path.extname(filename.originalname))
    },
  }),
  fileFilter: (_, file, cb: FileFilterCallback) => {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
      return cb(null, true)
    }

    return cb(new Error('file not an image.'))
  },
})
route.post('/', userMdl, authMdl, posts.create)
route.post(
  '/upload_image/:postId/:slug',
  userMdl,
  authMdl,
  postImgUpload.single('post_img'),
  posts.uploadImg
)
route.get('/:identifier/:slug', userMdl, posts.getPost)
route.delete('/delete', userMdl, authMdl, posts.deletePost)

route.post('/:identifier/:slug/comments', userMdl, authMdl, posts.commentOnPost)
route.get('/:identifier/:slug/comments', userMdl, posts.getPostComments)
route.delete('/:postId/:slug/:commentId', userMdl, authMdl, posts.deleleComment)

export { route }
