import { Response } from 'express'

export const handleError = (
  res: Response,
  errorMessage: string = 'Something went wrong',
  statusCode: number = 500
) => {
  return res.status(statusCode).json({ error: errorMessage })
}
