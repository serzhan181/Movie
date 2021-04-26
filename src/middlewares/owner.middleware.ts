import { handleError } from './../helpers/handleError'
import { User } from './../entity/User'
import { Request, Response, NextFunction } from 'express'

export const ownerMdl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user

  try {
    const userAcc = await User.findOneOrFail({
      where: { username: req.params.name },
    })

    if (userAcc.username !== user.username) {
      return handleError(res, "You don't own this profile.", 403)
    }

    return next()
  } catch (err) {
    return handleError(res)
  }
}
