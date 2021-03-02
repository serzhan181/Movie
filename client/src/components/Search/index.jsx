import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { SearchCommon } from './SearchCommon'

export const Search = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(({ query }) => {
    if (query) {
      history.push(`/?search=${query}`)
    }
  })
  return <SearchCommon {...{ onSubmit, register }} />
}
