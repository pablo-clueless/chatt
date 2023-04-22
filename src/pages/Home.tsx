import { FiMessageSquare } from 'react-icons/fi'

import { call, chat, video } from 'assets/images'
import { Footer, Navbar } from 'components'
import { usePageTitle } from 'hooks'

const Home = () => {
  usePageTitle('Connect with millions of users around the world')

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center px-5 md:px-52'>
      <div className='flex flex-col items-center my-10'>
        <div className='flex items-center gap-1 font-bold text-7xl md:text-9xl text-gray-700'>
          Chatt
          <FiMessageSquare className='fill-gray-700' />
        </div>
        <p className='text-sm font-semibold text-gray-300'>IMs, VoIP and Video calls</p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 my-7'>
        <div className='w-full flex flex-col'>
          <img src={chat} alt='messaging illustration' className='w-[250px]' />
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-2xl font-black'>Instant Messaging</p>
          <p className='text-lg'>Send and recieve instant messages Whether you're online or offline doesn't matter. What matters is that you'll always get notified of important messages.</p>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 my-7'>
        <div className='w-full flex flex-col'>
          <p className='text-2xl font-black'>VoIP Calls</p>
          <p className='text-lg'>Spend less on phone bills by making VoIP calls to any one with an Internet enabled phone. Chatt has got you covered like that.</p>
        </div>
        <div className='w-full flex flex-col'>
          <img src={call} alt='voip call illustration' className='w-[250px]' />
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 my-7'>
        <div className='w-full flex flex-col'>
          <img src={video} alt='video call illustration' className='w-[250px]' />
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-2xl font-black'>Video Chat</p>
          <p className='text-lg'>Send and recieve instant messages Whether you're online or offline doesn't matter. What matters is that you'll always get notified of important messages.</p>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home