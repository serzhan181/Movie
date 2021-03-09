import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { SearchCommon } from './SearchCommon'

export const Search = () => {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const onSubmit = handleSubmit(({ query }) => {
    if (query) {
      history.push(`/discover?query=${query}`)
    }
  })

  return <SearchCommon {...{ onSubmit, register }} />
}
