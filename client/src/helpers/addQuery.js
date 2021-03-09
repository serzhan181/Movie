export const addQuery = (key, value) => {
  let searchParams = new URLSearchParams(window.location.search)

  // q=awef
  if (window.location.search.includes(key)) {
    searchParams.set(key, value)
  } else {
    searchParams.append(key, value)
  }
  return searchParams.toString()
}
