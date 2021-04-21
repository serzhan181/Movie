import { Comment } from './../entity/Comment'
import { handleError } from './../helpers/handleError'
import { Post } from './../entity/Post'
import { Request, Response } from 'express'

class PostsController {
  create = async (req: Request, res: Response) => {
    const { title, body } = req.body
    const user = res.locals.user

    try {
      const post = new Post({ title, body, user })

      await post.save()

      return res.json(post)
    } catch (err) {
      return handleError(res)
    }
  }

  getPosts = async (_: Request, res: Response) => {
    try {
      const posts = await Post.find({
        relations: ['user', 'votes', 'comments'],
        order: { createdAt: 'DESC' },
      })

      if (res.locals.user) {
        posts.forEach((p) => p.setUserVote(res.locals.user))
      }

      return res.json(posts)
    } catch {
      return handleError(res)
    }
  }

  getPost = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params

    try {
      const post = await Post.findOneOrFail(
        { identifier, slug },
        { relations: ['user', 'votes', 'comments'] }
      )

      if (res.locals.user) {
        post.setUserVote(res.locals.user)
      }

      return res.json(post)
    } catch (err) {
      return handleError(res, 'Post not found', 404)
    }
  }

  getPostComments = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params

    try {
      const post = await Post.findOneOrFail({ identifier, slug })

      const comments = await Comment.find({
        where: { post },
        relations: ['votes', 'user'],
        order: { createdAt: 'DESC' },
      })

      if (res.locals.user) {
        post.setUserVote(res.locals.user)
        comments.forEach((c) => c.setUserVote(res.locals.user))
      }

      return res.json(comments)
    } catch (err) {
      return handleError(err)
    }
  }

  deletePost = async (req: Request, res: Response) => {
    const user = res.locals.user
    const { postIdentifier } = req.body

    try {
      await Post.delete({ user, identifier: postIdentifier })

      return res.json({ success: true })
    } catch (err) {
      console.log(err)
      return handleError(res)
    }
  }

  commentOnPost = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params
    const body = req.body.body

    try {
      const post = await Post.findOneOrFail({ identifier, slug })
      const comment = new Comment({ body, user: res.locals.user, post })

      await comment.save()

      return res.json(comment)
    } catch (err) {
      return handleError(res, 'Post not found.', 400)
    }
  }

  deleleComment = async (req: Request, res: Response) => {
    const user = res.locals.user
    const { postId, slug, commentId } = req.params

    try {
      const post = await Post.findOneOrFail({ identifier: postId, slug })
      await Comment.delete({ post, identifier: commentId })

      return res.json({ success: true })
    } catch (err) {
      console.log(err)
      return handleError(res)
    }
  }
}

export const posts = new PostsController()
