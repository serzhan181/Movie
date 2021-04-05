import { User } from './../entity/User'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const userMdl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.cookies
    if (!token) return next()

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({ username })
    res.locals.user = user

    return next()
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
