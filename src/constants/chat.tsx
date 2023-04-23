import { FiLock, FiPhone, FiSettings, FiUser } from 'react-icons/fi'

export const CHAT_MENU = [
    {name: 'call history', icon: <FiPhone />},
    {name: 'settings', icon: <FiSettings />},
]

export const USER_MENU = [
    {name: 'profile', target: '/profile', icon: <FiUser />},
    {name: 'account', target: '/settings', icon: <FiLock />},
]