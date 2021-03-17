import { handleError } from './../helpers/handleError'
import { parseValidationErrors } from '../helpers/parseValidationErrors'
import { validate } from 'class-validator'
import { User } from './../entity/User'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

class AuthController {
  register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    try {
      let errors: any = {}
      const userExistsEmail = await User.findOne({ email })
      const userExistsUsername = await User.findOne({ username })

      if (userExistsEmail) errors.email = ['Email is already taken.']
      if (userExistsUsername) errors.username = ['Username is already taken.']
      if (Object.keys(errors).length) {
        throw { errors }
      }

      const user = new User({ username, email, password })
      const validationErrors = await validate(user)
      errors = parseValidationErrors(validationErrors)

      if (Object.keys(errors).length) {
        throw { errors }
      }
      await user.save()

      return res.status(201).json(user)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })
      const passwordMatches = await bcrypt.compare(password, user.password)

      if (!user || !passwordMatches) {
        return res
          .status(401)
          .json({ error: "Username or password does'nt match" })
      }

      const token = jwt.sign({ username }, process.env.JWT_SECRET)

      res.set(
        'Set-Cookie',
        cookie.serialize('token', token, {
          httpOnly: true,
          secure: process.env.PROJECT_STATE === 'production',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        })
      )

      return res.json({ token })
    } catch (err) {
      return handleError(res)
    }
  }

  me = (_: Request, res: Response) => {
    return res.json(res.locals.user)
  }

  logout = async (_: Request, res: Response) => {
    res.set(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.PROJECT_STATE === 'production',
        sameSite: 'strict',
        expires: new Date(0),
        path: '/',
      })
    )

    return res.json({ success: true })
  }
}

export const authController = new AuthController()
