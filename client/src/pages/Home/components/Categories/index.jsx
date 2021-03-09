import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addQuery } from '../../../../helpers/addQuery'
import { useQuery } from '../../../../hooks/useQuery'
import { CategoriesCommon } from './CategoriesCommon'

export const Categories = ({ isLoading }) => {
  const history = useHistory()
  const query = useQuery()
  const [activeId, setActiveId] = useState(query.get('genre') || '0')

  const handleGenreSet = (genreId) => {
    if (genreId === activeId) return
    setActiveId(genreId)

    if (genreId === '0') {
      history.push('/')
      return
    }
    if (genreId && query.get('page')) {
      history.push(`?genre=${genreId}`)
    }
    history.push({
      search: addQuery('genre', genreId),
    })
  }

  return <CategoriesCommon {...{ activeId, handleGenreSet, isLoading }} />
}
