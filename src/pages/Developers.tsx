import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import { DOCUMENTATION } from 'constants/navigation'
import { Footer, Navbar, Thumb } from 'components'
import { usePageTitle, useScrollToTop } from 'hooks'

const Developers = () => {
  usePageTitle('Docs')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center select-none'>
      <div className='w-full h-[500px] md:h-[700px] bg-developers bg-cover relative'>
        <div className='w-full h-full grid place-items-center bg-black/60 bg-blend-multiply'>
          <div className='flex items-center gap-2 text-6xl md:text-9xl'>
            <h1 className='text-white font-black'>Developers</h1>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col px-5 md:px-52 py-5 my-10'>
        <Thumb size='large' className='mb-10' />
        <div className='w-full flex flex-col gap-10'>
          {DOCUMENTATION.map((doc, index) => (
            <div key={index} className=''>
              <p className='text-2xl text-gray-700 font-semibold capitalize'>{doc.title}</p>
              <div className='flex flex-col gap-2 my-2'>
                {doc.tabs.map((tab, index) => (
                  <Link key={index} to={tab.target} className='w-full flex items-center rounded-md border hover:border-blue-500 p-2 transition duration-300 hover:translate-x-2'>
                    <div className='w-full flex flex-col'>
                      <p className='text-lg text-gray-700 font-medium capitalize'>{tab.label}</p>
                      <p className='text-sm text-gray-500 first-letter:capitalize'>{tab.description}</p>
                    </div>
                    <FiArrowRight className='text-xl' />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Developers