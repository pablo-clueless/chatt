import { lazy } from 'react'

const Chat = lazy(() => import('./Chat'))
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
    Chat,
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