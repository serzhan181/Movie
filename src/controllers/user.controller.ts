import { Post } from './../entity/Post'
import { User } from './../entity/User'
import { handleError } from './../helpers/handleError'
import { Request, Response } from 'express'
import fs from 'fs'

class UserController {
  getUser = async (req: Request, res: Response) => {
    const name = req.params.name

    try {
      const user = await User.findOne({ username: name })

      if (!user) {
        return handleError(res, `No user named ${name}`, 404)
      }

      const posts = await Post.find({
        where: { user },
        relations: ['comments', 'votes', 'user'],
      })

      user.posts = posts

      if (res.locals.user) {
        user.posts.forEach((p) => p.setUserVote(res.locals.user))
      }

      return res.json(user)
    } catch (e) {
      console.log(e)
      return handleError(res)
    }
  }

  uploadImage = async (req: Request, res: Response) => {
    const user = res.locals.user

    try {
      if (user?.imageUrn?.length) {
        fs.unlinkSync(`public\\images\\${user.imageUrn}`)
      }
      user.imageUrn = req.file.filename

      await user.save()
      return res.json(user)
    } catch (error) {
      console.log(error)
      return handleError(res)
    }
  }
}

export const user = new UserController()
