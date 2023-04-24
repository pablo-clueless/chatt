
const Loader = () => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 grid place-items-center !z-20'>
      <div className='w-[75px] h-[75px] grid place-items-center rounded-full border-4 border-gray-700 border-b-transparent animate-spin'>
        <div className='w-[50px] h-[50px] rounded-full border-4 border-gray-400 border-b-transparent animate-spin'></div>
      </div>
    </div>
  )
}

export default Loader