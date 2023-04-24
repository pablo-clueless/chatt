
const Loader = () => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 grid place-items-center !z-20'>
      <div className='w-[50px] h-[50px] relative rounded-full border-4 border-gray-700 border-b-transparent animate-spin duration-500'>
        <div className='w-full h-full absolute top-0 left-0 rounded-full border-4 border-gray-400 border-b-transparent animate-spin duration-150'></div>
      </div>
    </div>
  )
}

export default Loader