import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { useConcurrentTransition } from 'hooks'
import { Auth, Loader } from 'components'
import {
  Chat,
  ForgotPassword,
  Home,
  NotFound,
  Profile,
  ResetPassword,
  Signin,
  Signup,
  Verify
} from 'pages'

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router