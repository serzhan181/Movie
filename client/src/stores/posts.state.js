import { makeAutoObservable, runInAction } from 'mobx'
import { postsAPI } from '../api/rest/posts.api'

class Posts {
  constructor() {
    makeAutoObservable(this)
  }

  posts = []
  singlePost = null

  setPosts = (posts) => {
    this.posts = posts
  }

  fetchPost = async (identifier, slug) => {
    this.singlePost = null
    try {
      const { data: post } = await postsAPI.getPost(identifier, slug)
      const { data: postComments } = await postsAPI.getPostComments(
        identifier,
        slug
      )

      runInAction(() => {
        this.singlePost = { ...post, comments: postComments }
      })
    } catch (e) {
      console.error(e)
    }
  }

  fetchPosts = async () => {
    this.posts = []
    try {
      const res = await postsAPI.getPosts()
      runInAction(() => {
        this.posts = res.data
      })
    } catch (e) {
      console.error(e)
    }
  }

  vote = async ({ identifier, slug, value }) => {
    try {
      const res = await postsAPI.vote({ identifier, slug, value })

      this.posts.forEach((p) => {
        if (p.identifier === res.data.identifier && p.slug === res.data.slug) {
          runInAction(() => {
            p.voteScore = res.data.voteScore
            p.userVote = res.data.userVote
          })
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  commentPost = async ({ identifier, slug, body }) => {
    if (!body?.length) return
    try {
      const { status, data } = await postsAPI.commentPost({
        identifier,
        slug,
        body,
      })
      if (status === 200) {
        runInAction(() => {
          this.singlePost.comments = [data, ...this.singlePost.comments]
        })
      }
    } catch (e) {
      console.warn(e)
    }
  }

  deleteComment = async ({ commentId }) => {
    try {
      if (!this.singlePost) return

      const { data } = await postsAPI.deleteComment({
        postId: this.singlePost.identifier,
        slug: this.singlePost.slug,
        commentId,
      })
      if (data?.success) {
        runInAction(() => {
          this.singlePost.comments = this.singlePost.comments.filter(
            (c) => c.identifier !== commentId
          )
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const posts = new Posts()
