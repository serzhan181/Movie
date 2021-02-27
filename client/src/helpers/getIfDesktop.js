let width = window.innerWidth

window.addEventListener('resize', () => {
  width = window.innerWidth
})

export const getIfDesktop = () => {
  let isDesktop = false
  if (width > 1024) isDesktop = true

  return isDesktop
}
