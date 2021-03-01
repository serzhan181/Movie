export const SearchCommon = ({ onSubmit, register }) => {
  return (
    <form
      className='p-2 bg-primary-light rounded-full w-96 flex justify-around'
      onSubmit={onSubmit}
    >
      <input
        className='bg-secondary outline-none rounded-full text-sm px-2 w-10/12'
        type='text'
        name='query'
        ref={register}
      />
      <button className='btn bg-secondary w-10' type='submit'>
        <i className='icon ion-ios-search'></i>
      </button>
    </form>
  )
}
