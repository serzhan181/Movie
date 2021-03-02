export const requestAndToggle = async (fn, toggleFn) => {
  toggleFn(true)
  await fn()
  toggleFn(false)
}
