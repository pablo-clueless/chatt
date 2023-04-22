import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { FiCheckCircle } from 'react-icons/fi'
import axios, { AxiosError } from 'axios'

import { Loader, Thumb } from 'components'
import { usePageTitle } from 'hooks'

const URL = import.meta.env.VITE_BASE_URL

const Verify = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  usePageTitle('Verify Email')

  const {isLoading} = useQuery({
    enabled: !!token,
    queryFn: () => {
      return axios.post(`${URL}/verify-email/${token}`)
    },
    queryKey: ['verify email'],
    onSuccess: ({data}) => {
      console.log(data)
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })

  if(isLoading) return <Loader />

  return (
    <div className='w-screen h-screen grid place-items-center'>
      <div className='flex flex-col items-center'>
        <Thumb />
        <div className='flex flex-col items-center mt-20'>
          <FiCheckCircle className='text-green-500 text-5xl my-2' />
          <p className='text-lg font-medium'>Your account has been verified!</p>
          <Link to='/signin' className='text-sm font-medium underline mt-10'>Go to sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default Verify