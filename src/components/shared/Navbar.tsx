import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'hooks'
import Button from './Button'
import Thumb from './Thumb'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.user)
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
    <header className={`w-full px-2 md:px-10 py-4 flex items-center justify-between !z-10 top-0 left-0 border-b ${scrolled ? 'fixed bg-white' : 'static bg-transparent'}`}>
      <Thumb />
      {isLoggedIn ? (
        <>
        {user && (
          <Link to='/profile' className='flex items-center gap-4 rounded-full p-2 hover:bg-gray-100 transition duration-500'>
            {user.avatar ? (
              <img src={user?.avatar} alt={user.full_name} className='w-[50px] h-[50px] rounded-full object-cover' />
            ):(
              <div className='w-[50px] h-[50px] grid place-items-center bg-gray-900 rounded-full'>
                <p className='text-white text-3xl font-black uppercase'>
                  {user.full_name.substring(0, 1)}
                </p>
              </div>
            )}
            <div className='hidden md:flex flex-col mr-2'>
              <p className='text-gray-700 font-medium text-lg'>{user.full_name}</p>
              <p className='text-gray-300 font-bold text-sm'>@{user.username}</p>
            </div>
          </Link>
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
    </header>
  )
}

export default Navbar