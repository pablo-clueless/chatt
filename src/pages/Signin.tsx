import { useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FcGoogle } from 'react-icons/fc'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const initialValues = {email: '', password: ''}
const URL = import.meta.env.VITE_BASE_URL

interface Payload {
  provider: 'auth' | 'google' | 'github'
  payload: {
    email?: string
    password?: string
    token?: string
  }
}

const Signin = () => {
  const navigate = useNavigate()
  usePageTitle('Sign In')

  const schema = Yup.object({
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
    password: Yup.string().matches(/^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/).required('Password is required!')
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: ({provider, payload}:Payload) => {
      return axios.post(`${URL}/auth/signin/${provider}`, payload)
    },
    mutationKey: ['sigin auth google'],
    onSuccess: ({data}) => {
      console.log(data)
      navigate('/chat')
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const {errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async(data) => {
      mutateAsync({provider: 'auth', payload: data})
    }
  })

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async(response) => {
      const {code} = response
      mutateAsync({provider: 'google', payload: {token: code}})
    },
    onError: (error) => console.log(error)
  })
  
  return (
    <main className='w-full flex flex-col items-center pt-20'>
      <Thumb />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Welcome Back!</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Sign in to enjoy the wonderful world of Chatt!</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            name='email'
            type='email'
            label='Email'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='someone@example.com'
            error={errors.email}
          />
          <InputField
            name='password'
            type='password'
            label='Password'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='********'
            error={errors.password}
          />
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'Signin'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
        <Link to='/forgot-password' className='text-sm font-medium mt-5'>Forgot password?</Link>
        <Link to='/signup' className='text-sm font-medium mt-5 underline ml-1'>Sign up here &rarr;</Link>
      </div>
      <div className='flex flex-col items-center mt-20'>
        <Button
          label={<FcGoogle className='text-2xl' />}
          onClick={() => googleLogin()}
          className='w-[338px] h-[46px] border border-gray-700'
        />
      </div>
    </main>
  )
}

export default Signin