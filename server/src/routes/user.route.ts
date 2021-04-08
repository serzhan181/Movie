import { authMdl } from './../middlewares/auth.middleware'
import { userMdl } from './../middlewares/user.middleware'
import { ownerMdl } from './../middlewares/owner.middleware'
import { Router } from 'express'
import { user } from '../controllers/user.controller'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { makeid } from '../helpers/makeId'

const route = Router()

route.get('/:name', userMdl, user.getUser)

const upload = multer({
  storage: multer.diskStorage({
    destination: 'public/images',
    filename: (_, file, callback) => {
      const name = makeid(10)
      callback(null, name + path.extname(file.originalname))
    },
  }),
  fileFilter: (_, file, callback: FileFilterCallback) => {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
      return callback(null, true)
    }

    console.log('I SHOULD BE THERE')
    return callback(new Error('file not an image.'))
  },
})
route.post(
  '/:name/image',
  userMdl,
  authMdl,
  ownerMdl,
  upload.single('file'),
  user.uploadImage
)

export { route }
