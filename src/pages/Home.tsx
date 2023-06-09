import { FiMessageSquare } from 'react-icons/fi'

import { call, chat, launch, video } from 'assets/images'
import { Button, Footer, Navbar } from 'components'
import { usePageTitle, useScrollToTop } from 'hooks'

const Home = () => {
  usePageTitle('Connect with millions of users around the world')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center select-none'>
      <div className='w-full h-[500px] md:h-[700px] bg-home bg-cover relative'>
        <div className='w-full h-full grid place-items-center bg-black/60 bg-blend-multiply'>
          <div className='flex items-center gap-2 text-7xl md:text-9xl'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center gap-1 font-black text-7xl md:text-9xl text-white'>
                Chatt
                <FiMessageSquare className='fill-white' />
              </div>
              <p className='text-sm font-semibold text-white'>IMs, VoIP and Video calls</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center px-5 md:px-52'>
        <div className='flex flex-col items-center my-10'>
          <p className='text-lg text-center mt-5 mb-2'>Chatt will lauch soon. Join the waitlist to try the beta before it's publicly available.</p>
          <Button
            label='join waitlist'
            to='/join-waitlist'
            className='bg-gray-700 text-white mb-10'
          />
        </div>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-4 my-7'>
          <div className='w-full flex flex-col items-center'>
            <img src={chat} alt='messaging illustration' className='w-[250px]' />
          </div>
          <div className='w-full flex flex-col text-center md:text-left'>
            <p className='text-2xl font-black'>Instant Messaging</p>
            <p className='text-lg'>Send and recieve instant messages. Chatt retains the quality of images and video sent. Chatt also allows you send code spinnets.</p>
          </div>
        </div>
        <div className='w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-4 my-7'>
          <div className='w-full flex flex-col text-center md:text-left'>
            <p className='text-2xl font-black'>VoIP Calls</p>
            <p className='text-lg'>Spend less on phone bills by making VoIP calls to any one with an Internet enabled phone. Chatt has got you covered like that.</p>
          </div>
          <div className='w-full flex flex-col items-center'>
            <img src={call} alt='voip call illustration' className='w-[250px]' />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-4 my-7'>
          <div className='w-full flex flex-col items-center'>
            <img src={video} alt='video call illustration' className='w-[250px]' />
          </div>
          <div className='w-full flex flex-col text-center md:text-left'>
            <p className='text-2xl font-black'>Video Chat</p>
            <p className='text-lg'>Make video calls with up to 50 users. Crisp video calls with low latency and works on 2G network. Say goodbye to quirky and delayed video call.</p>
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
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home