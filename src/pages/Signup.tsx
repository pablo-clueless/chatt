import { useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FcGoogle } from 'react-icons/fc'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

interface Payload {
  age_consent: boolean
  agreement: boolean
  email: string
  full_name: string
  password: string
  username: string
}

const initialValues:Payload = {age_consent: false, agreement: false, email: '', full_name: '', password: '', username: ''}
const URL = import.meta.env.VITE_BASE_URL

const Signup = () => {
  const navigate = useNavigate()
  usePageTitle('Join millions of users around the world')

  const schema = Yup.object({
    full_name: Yup.string().min(5, 'Name is too short').required('Full name is required!'),
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
    password: Yup.string().
      matches(/^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/, 'Password must contain at least one uppercase, lowercase, number and special character!').
      required('Password is required!'),
    username: Yup.string().required('Username is required!'),
    age_consent: Yup.boolean().required('You need to be 13 years or older as the time of signup!'),
    agreement: Yup.boolean().required('Please accept the terms and conditions of this service!'),
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (payload:Payload) => {
      return axios.post(`${URL}/chatt/v1/auth/signup`, payload)
    },
    mutationKey: ['signup auth'],
    onSuccess: ({data}) => {
      const {message} = data
      console.log(message)
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const googleMutation = useMutation({
    mutationFn: (code:string) => {
      return axios.post(`${URL}/chatt/v1/auth/google`, {code})
    },
    mutationKey: ['signup google'],
    onSuccess: ({data}) => {
      console.log(data)
      navigate('/')
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
        <p className='text-2xl font-medium'>Welcome!</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Join the wonderful world of Chatt today!</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            element='input'
            name='full_name'
            type='text'
            label='Full Name'
            onChange={handleChange}
            placeholder='John Doe'
            error={errors.full_name}
          />
          <InputField
            element='input'
            name='username'
            type='text'
            label='Username'
            onChange={handleChange}
            placeholder='johndoe'
            error={errors.username}
          />
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
            name='age_consent'
            type='checkbox'
            label='I am 13 years or older'
            onChange={handleChange}
            error={errors.age_consent}
          />
          <InputField
            element='input'
            name='agreement'
            type='checkbox'
            label='I accept the terms and condition of the usage of this service.'
            onChange={handleChange}
            error={errors.agreement}
          />
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'Signin'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
        <Link to='/signin' className='text-sm font-medium mt-5 underline ml-1'>&larr; Sign in here</Link>
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

export default Signup