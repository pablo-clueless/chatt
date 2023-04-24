import { useQuery } from '@tanstack/react-query'
import Cookies from 'universal-cookie'
import axios, { AxiosError } from 'axios'

import { useAppSelector, usePageTitle, useScrollToTop } from 'hooks'

const URL = import.meta.env.VITE_BASE_URL

const Profile = () => {
  const { user } = useAppSelector(store => store.user)
  const cookies = new Cookies()
  usePageTitle('Profile')
  useScrollToTop()

  useQuery({
    enabled: false,
    queryFn: () => {
      return axios.get(`${URL}/chatt/v1/user/get/${user?.id}`, {
        headers: { 'Authorization': `Bearer ${cookies.get('access_token')}` }
      })
    },
    queryKey: ['get user profile'],
    onSuccess: ({data}) => {
      console.log(data)
    },
    onError: (error:AxiosError) => {
      const {message} = error
      console.log(message)
    }
  })
  
  return (
    <div>Profile</div>
  )
}

export default Profile