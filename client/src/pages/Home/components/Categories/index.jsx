import { CategoriesCommon } from './CategoriesCommon'

export const Categories = ({ isLoading }) => {
  // SHOWS IT IS DEPRECATED FOR NOW.
  const handleGenreSet = (genreId) => {
    alert(
      'Unfortunatelly, the movie db changed its API and this feature is no longer available.'
    )
  }

  return <CategoriesCommon {...{ handleGenreSet, isLoading }} />
}
