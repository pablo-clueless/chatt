import { FiMessageSquare } from 'react-icons/fi'

import { Button, Footer, Navbar, Thumb } from 'components'
import { usePageTitle, useScrollToTop } from 'hooks'
import { launch } from 'assets/images'
import { CORE_ } from 'constants/chat'

const About = () => {
  usePageTitle('About Chatt')
  useScrollToTop()

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
        <div className='w-full flex flex-col items-center text-center py-10'>
          <Thumb size='x-large' />
          <p className='text-gray-500 text-lg'>
            Chatt is a web-based cutting-edge instant messaging app that features VoIP and video calls.
            We added a few ground-breaking features that you'll find interesting.
          </p>
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 my-5'>
            {CORE_.map((core, index) => (
              <div key={index} className='w-full h-[200px] bg-white rounded-md border p-4 relative shadow-lg'>
                <span className='bg-gray-500 text-white text-2xl rounded-full p-2 absolute -bottom-5 left-1/2 -translate-x-1/2'>
                  {core.icon}
                </span>
                <p className='text-lg font-semibold mb-4'>{core.title}</p>
                <p className='font-medium text-gray-500'>{core.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center bg-gray-500 rounded-lg my-7'>
          <img src={launch} alt='launch illustration' className='w-full md:w-[500px] ' />
          <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
            <p className='text-3xl font-black'>Join the waitlist</p>
            <p className='text-xl font-medium text-white my-2'>
              Chatt will be available soon. <br />
              Join the waitlist to try the beta version before it is publicly available.
            </p>
            <Button
            label='join waitlist'
            to='join-waitlist'
            className='w-[200px] bg-gray-700 text-white my-10'
          />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default About