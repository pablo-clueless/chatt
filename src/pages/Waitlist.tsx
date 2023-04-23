import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const URL = import.meta.env.VITE_BASE_URL

const Waitlist = () => {
  usePageTitle('Join Waitlist')

  const schema = Yup.object({
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (email:string) => {
      return axios.post(`${URL}/chatt/v1/user/join-waitlist`, {email})
    },
    mutationKey: ['join waitlist'],
    onSuccess: ({data}) => {
      const {message} = data
      console.log(message)
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const {errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: { email: '' },
    validationSchema: schema,
    onSubmit: (data) => {
      const { email } = data
      mutateAsync(email)
    }
  })

  return (
    <main className='w-full flex flex-col items-center pt-20'>
      <Thumb />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Join Waitlist</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Chatt will be available soon. Join the waitlist to try the beta version.</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            element='input'
            name='email'
            type='email'
            label='Email'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='someone@example.com'
            error={errors.email}
          />
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'Join Waitlist'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
        <Link to='/' className='text-sm font-medium mt-10'>&larr; Home</Link>
      </div>
    </main>
  )
}

export default Waitlist