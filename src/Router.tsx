import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { useConcurrentTransition } from 'hooks'
import { Auth, Loader } from 'components'
import {
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
  Waitlist
} from 'pages'

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/join-waitlist' element={<Waitlist />} />
        <Route path='/docs' element={<Developers />} />
        <Route element={<Auth />}>
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router