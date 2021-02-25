export const useDiffDate = (date) => {
  const date1 = new Date(date)
  const date2 = new Date()
  let days = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10)

  let months = days > 30 ? (days / 30).toFixed(1) : 0

  if (months) days = 0

  const years = months > 12 ? (months / 12).toFixed(1) : 0

  if (years) months = 0

  return {
    type: years ? 'years' : months ? 'months' : 'days',
    diff: years || months || days,
  }
}
