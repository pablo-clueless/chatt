import { lazy } from 'react'

const Chat = lazy(() => import('./Chat'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))
const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))
const ResetPassword = lazy(() => import('./ResetPassword'))
const Signin = lazy(() => import('./Signin'))
const Signup = lazy(() => import('./Signup'))
const Verify = lazy(() => import('./Verify'))

export {Chat, ForgotPassword, Home, NotFound, ResetPassword, Signin, Signup, Verify}