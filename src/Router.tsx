import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { Chat, ForgotPassword, Home, NotFound, ResetPassword, Signin, Signup, Verify } from 'pages'
import { useConcurrentTransition } from 'hooks'
import { Auth, Loader } from 'components'

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
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router