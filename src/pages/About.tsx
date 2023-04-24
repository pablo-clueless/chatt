import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Footer, Navbar, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const About = () => {
  usePageTitle('About Chatt')

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center select-none'>
      <div className='w-full h-[500px] md:h-[700px] bg-about bg-cover relative'>
        <div className='w-full h-full grid place-items-center bg-black/70 bg-blend-multiply'>
          <div className='flex items-center gap-2 text-7xl md:text-9xl'>
            <h1 className='text-white font-black'>Chatt</h1>
            <FiMessageSquare className='text-white fill-white' />
          </div>
        </div>
      </div>
      <section className='w-full flex flex-col items-center px-5 md:px-52 py-5'>
        <div className='w-full flex flex-col items-center text-center my-2 py-20'>
          <Thumb size='large' />
          <p className='text-gray-500 text-lg'>
            Chatt is a new, cutting-edge instant messaging app that features VoIP and video calls.
            We added a few ground-breaking features that you'll find interesting.
          </p>
        </div>
        <div className='w-full flex flex-col items-center text-center my-2 py-20'>
          <p className='text-2xl font-bold'>Join Chatt today</p>
          <p className='text-gray-500 text-lg'>
            Chatt will launch soon. Join the <Link to='/join-waitlist' className='underline text-blue-900'>waitlist</Link> to be among the first people to enjoy the app
          </p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default About