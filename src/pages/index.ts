import { lazy } from 'react'

const About = lazy(() => import('./About'))
const Chat = lazy(() => import('./Chat'))
const Contact = lazy(() => import('./Contact'))
const Developers = lazy(() => import('./Developers'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))
const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))
const Profile = lazy(() => import('./Profile'))
const ResetPassword = lazy(() => import('./ResetPassword'))
const Settings = lazy(() => import('./Settings'))
const Signin = lazy(() => import('./Signin'))
const Signup = lazy(() => import('./Signup'))
const Verify = lazy(() => import('./Verify'))
const Waitlist = lazy(() => import('./Waitlist'))

export {
    About,
    Chat,
    Contact,
    Developers,
    ForgotPassword,
    Home,
    NotFound,
    Profile,
    ResetPassword,
    Settings,
    Signin,
    Signup,
    Verify,
    Waitlist,
}