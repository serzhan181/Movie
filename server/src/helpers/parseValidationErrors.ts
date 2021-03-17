import type { ValidationError } from 'class-validator'

export const parseValidationErrors = (errors: ValidationError[]) => {
  const res = {}

  errors.forEach((field) => {
    res[field.property] = Object.values(field.constraints)
  })

  return res
}
