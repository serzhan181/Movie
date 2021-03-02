import { useForm } from 'react-hook-form'
import { SearchCommon } from './SearchCommon'

export const Search = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit(({ query }) => {
    if (query) {
      console.log('easy')
    }
  })
  return <SearchCommon {...{ onSubmit, register }} />
}
