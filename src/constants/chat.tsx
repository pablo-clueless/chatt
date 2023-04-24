import { FiLock, FiPhone, FiSettings, FiUser } from 'react-icons/fi'
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io5'

export const CHAT_MENU = [
    {name: 'call history', icon: <FiPhone />},
    {name: 'settings', icon: <FiSettings />},
]

export const USER_MENU = [
    {name: 'profile', target: '/profile', icon: <FiUser />},
    {name: 'account', target: '/settings', icon: <FiLock />},
]

export const SOCIAL_HANDLES = [
    {target: 'https://github.com/pablo-clueless/chatt', icon: <IoLogoGithub />},
    {target: 'https://twitter.com/@pablo_clueless', icon: <IoLogoTwitter />},
]