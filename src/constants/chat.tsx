import { FiLock, FiMessageSquare, FiPhone, FiSettings, FiUser, FiVideo } from 'react-icons/fi'
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

export const CORE_ = [
    {
        title: 'Instant Messaging',
        body: 'Send and recieve instant messages. Chatt retains the quality of images and video sent. Chatt also allows you send code spinnets.',
        icon: <FiMessageSquare />
    },
    {
        title: 'VoIP Calls',
        body: 'Spend less on phone bills by making VoIP calls to any one with an Internet enabled phone. Chatt has got you covered like that.',
        icon: <FiPhone />
    },
    {
        title: 'Video Calls',
        body: 'Make video calls with up to 50 users. Crisp video calls with low latency and works on 2G network. Say goodbye to quirky and delayed video call.',
        icon: <FiVideo />
    },
]