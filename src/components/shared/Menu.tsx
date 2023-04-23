import { Link, useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import Cookies from 'universal-cookie'
import { useRef } from 'react'

import { useAppDispatch, useClickPosition } from 'hooks'
import { USER_MENU } from 'constants/chat'
import { logout } from 'store/slices/user'

interface Props {
    onClose: () => void
}

const Menu = ({onClose}:Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    useClickPosition(ref, onClose)
    const navigate = useNavigate()
    const cookies = new Cookies()

    const logoutFn = () => {
        dispatch(logout())
        cookies.remove('access_token')
        navigate('/')
    }

  return (
    <div ref={ref} className='w-[200px] flex flex-col fixed top-20 right-10 bg-white p-3 rounded-md border'>
        {USER_MENU.map((menu, index) => (
            <Link key={index} to={menu.target} className='w-full flex items-center gap-2 my-2 font-medium capitalize'>
                {menu.icon}{menu.name}
            </Link>
        ))}
        <button onClick={() => logoutFn()} className='w-full flex items-center gap-2 my-2 font-medium text-red-600 capitalize'>
            <FiLogOut /> logout
        </button>
    </div>
  )
}

export default Menu