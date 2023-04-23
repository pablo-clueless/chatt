import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

interface Payload {
  email: string
  message: string
  name: string
}

const initialValues:Payload = {email: '', message: '', name: ''}
const URL = import.meta.env.VITE_BASE_URL

const Contact = () => {
  const navigate = useNavigate()
  usePageTitle('Contact Us')

  const schema = Yup.object({
    email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
    message: Yup.string().required('Message is required!'),
    name: Yup.string().required('Name is required!')
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (payload:Payload) => {
      return axios.post(`${URL}/chatt/v1/user/contact`, payload)
    },
    mutationKey: ['contact support'],
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
  
  return (
    <main className='w-full flex flex-col items-center pt-20'>
      <Thumb />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Contact Us</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Send us a message and a rep will get in touch with you.</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            element='input'
            name='name'
            type='text'
            label='Name'
            onChange={handleChange}
            placeholder='John Doe'
            error={errors.name}
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
            element='textarea'
            name='message'
            type='text'
            label='Message'
            onChange={handleChange}
            placeholder='Your message'
            error={errors.message}
          />
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'proceed'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
        <Link to='/' className='text-sm font-medium mt-5 underline ml-1'>&larr; Go Home</Link>
      </div>
    </main>
  )
}

export default Contact