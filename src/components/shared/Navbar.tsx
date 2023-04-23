import { useEffect, useState } from 'react'

import { useAppSelector } from 'hooks'
import Button from './Button'
import Thumb from './Thumb'
import Menu from './Menu'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.user)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      scrollY > 700 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
    {isMenuOpen && (
      <Menu
        onClose={() => setIsMenuOpen(false)}
      />
    )}
    <header className={`w-full px-2 md:px-10 py-4 flex items-center justify-between !z-10 top-0 left-0 border-b ${scrolled ? 'fixed bg-white' : 'static bg-transparent'}`}>
      <Thumb />
      <div className='hidden'>

        {isLoggedIn ? (
          <>
          {user && (
            <button onClick={() => setIsMenuOpen(current => !current)} className='flex items-center gap-2 rounded-full p-2 hover:bg-gray-100 transition duration-500'>
              {user.avatar ? (
                <img src={user?.avatar} alt={user.full_name} className='w-[40px] h-[40px] rounded-full object-cover' />
              ):(
                <div className='w-[40px] h-[40px] grid place-items-center bg-gray-900 rounded-full'>
                  <p className='text-white text-2xl font-black uppercase'>
                    {user.full_name.substring(0, 1)}
                  </p>
                </div>
              )}
              <div className='hidden md:flex flex-col mr-2'>
                <p className='text-gray-700 font-medium'>{user.full_name}</p>
                <p className='text-gray-300 font-bold text-xs'>@{user.username}</p>
              </div>
            </button>
          )}
          </>
        ):(
          <div className='flex items-center gap-4'>
            <Button
              label='login'
              to='/signin'
              className='text-gray-700 border border-gray-700'
            />
            <Button
              label='sign up'
              to='/signup'
              className='bg-gray-700 text-white'
              />
          </div>
        )}
      </div>
      <Button
        label='join waitlist'
        to='/join-waitlist'
        className='bg-gray-700 text-white'
      />
    </header>
    </>
  )
}

export default Navbar