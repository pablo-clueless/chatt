import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const initialValues = {email: ''}
const URL = import.meta.env.VITE_BASE_URL

const ForgotPassword = () => {
  const navigate = useNavigate()
  usePageTitle('Forgot Password')

  const schema = Yup.object({
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (email: string) => {
      return axios.post(`${URL}/chatt/v1/auth/forgot-password`, {email})
    },
    mutationKey: ['signup auth google'],
    onSuccess: ({data}) => {
      console.log(data)
      navigate('/verify')
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
        const {email} = data
      mutateAsync(email)
    }
  })

  return (
    <main className='w-full flex flex-col items-center pt-20 select-none'>
      <Thumb size='large' />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Forgot Password</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Enter your email and we will send a link to reset your password!</p>
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
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'Proceed'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
      </div>
      <div className='flex items-center gap-40 mt-10'>
        <Link to='/' className='text-sm font-medium ml-1'>&larr; Home</Link>
        <Link to='/signin' className='text-sm font-medium ml-1'>Sign In &rarr;</Link>
      </div>
    </main>
  )
}

export default ForgotPassword