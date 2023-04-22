import { useEffect, useState } from 'react'

import Button from './Button'
import Thumb from './Thumb'

const Navbar = () => {
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
    <header className={`w-full px-10 py-4 flex items-center justify-between !z-10 top-0 left-0 border-b ${scrolled ? 'fixed' : 'static'}`}>
      <Thumb />
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
    </header>
  )
}

export default Navbar