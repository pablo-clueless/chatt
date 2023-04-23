import { Link } from 'react-router-dom'

import { Footer, Navbar } from 'components'

const NotFound = () => {
  return (
    <>
    <Navbar />
    <main className='w-full h-[607px] grid place-items-center bg-gray-200 bg-not-found bg-no-repeat bg-contain bg-center px-4'>
      <div className='w-full md:w-[400px] flex flex-col items-center bg-gray-400/50 rounded-md p-5'>
        <p className='text-9xl text-gray-700 font-black tracking-wider'>404</p>
        <Link to='/' className='text-gray-700 text-xl font-medium underline mt-5'>Go Home</Link>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default NotFound