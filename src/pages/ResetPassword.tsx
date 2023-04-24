import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, InputField, Spinner, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const initialValues = {password: '', confirm_password: ''}
const URL = import.meta.env.VITE_BASE_URL

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  usePageTitle('Reset Password')

  const schema = Yup.object({
    confirm_password: Yup.string().
    matches(/^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/, 'Password must contain at least one uppercase, lowercase, number and special character!').
    required('Password is required!'),
    password: Yup.string().
    matches(/^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/, 'Password must contain at least one uppercase, lowercase, number and special character!').
    required('Password is required!'),
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (password:string) => {
      return axios.post(`${URL}/chatt/v1/auth/reset-password`, {password}, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
    },
    mutationKey: ['reset password'],
    onSuccess: ({data}) => {
      console.log(data)
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  const {errors, handleChange, handleSubmit, values} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (data) => {
      const {confirm_password, password} = data
      if(password !== confirm_password) return
      mutateAsync(password)
    }
  })

  const {confirm_password, password} = values

  return (
    <main className='w-full flex flex-col items-center pt-20 select-none'>
      <Thumb size='large' />
      <div className='flex flex-col items-center mt-10'>
        <p className='text-2xl font-medium'>Reset Password</p>
        <p className='text-xs text-gray-700 font-bold mt-2'>Set a new password to keep your account secured.</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-14'>
          <InputField
            element='input'
            name='password'
            type='password'
            label='Password'
            value={password}
            onChange={handleChange}
            placeholder='********'
            error={errors.password}
          />
          <InputField
            element='input'
            name='confirm_password'
            type='password'
            label='Confirm Password'
            value={confirm_password}
            onChange={handleChange}
            placeholder='********'
            error={errors.confirm_password}
          />
          <Button
            label={isLoading ? <Spinner size='small' weight='thin' /> : 'Proceed'}
            type='submit'
            className='w-full h-[46px] bg-gray-700 text-white'
          />
        </form>
      </div>
    </main>
  )
}

export default ResetPassword