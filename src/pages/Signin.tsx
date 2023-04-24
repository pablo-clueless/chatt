import { useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FcGoogle } from 'react-icons/fc'
import axios, { AxiosError } from 'axios'
import Cookies from 'universal-cookie'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { useAppDispatch, usePageTitle } from 'hooks'
import { login } from 'store/slices/user'

interface Payload {
  email: string
  password: string
}

const initialValues:Payload = {email: '', password: ''}
const URL = import.meta.env.VITE_BASE_URL

const Signin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cookies = new Cookies()
  usePageTitle('Sign In')

  const schema = Yup.object({
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
    password: Yup.string().
    matches(/^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/, 'Password must contain at least one uppercase, lowercase, number and special character!').
    required('Password is required!'),
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (payload:Payload) => {
      return axios.post(`${URL}/chatt/v1/auth/signin`, payload)
    },
    mutationKey: ['signin auth'],
    onSuccess: ({data}) => {
      const {data:{safeuser, token}, message} = data
      dispatch(login(safeuser))
      cookies.set('access_token', token)
      console.log(message)
      navigate('/chat')
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const googleMutation = useMutation({
    mutationFn: (code:string) => {
      return axios.post(`${URL}/chatt/v1/auth/google`, code)
    },
    mutationKey: ['signin auth'],
    onSuccess: ({data}) => {
      const {data:{safeuser, token}, message} = data
      dispatch(login(safeuser))
      cookies.set('', token)
      console.log(message)
      navigate('/chat')
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const {errors, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async(data) => {
      mutateAsync(data)
    }
  })

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async(response) => {
      const {code} = response
      googleMutation.mutateAsync(code)
    },
    onError: (error) => console.log(error)
  })
  
  return (
    <main className='w-full flex flex-col items-center pt-20 select-none'>
      <Thumb size='large' />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Welcome Back!</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Sign in to enjoy the wonderful world of Chatt!</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            element='input'
            name='email'
            type='email'
            label='Email'
            onChange={handleChange}
            placeholder='someone@example.com'
            error={errors.email}
          />
          <InputField
            element='input'
            name='password'
            type='password'
            label='Password'
            onChange={handleChange}
            placeholder='********'
            error={errors.password}
          />
          <InputField
            element='input'
            name='remember_me'
            type='checkbox'
            label='Keep me logged in'
            onChange={handleChange}
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
          label={googleMutation.isLoading ? <Spinner size='small' weight='thin' /> : <FcGoogle className='text-2xl' />}
          onClick={() => googleLogin()}
          className='w-[338px] h-[46px] border border-gray-700'
        />
      </div>
    </main>
  )
}

export default Signin