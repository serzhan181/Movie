import { User } from './../entity/User'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const authMdl = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: User | undefined = res.locals.user

    if (!user) throw new Error('Unauthenticated.')

    return next()
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
