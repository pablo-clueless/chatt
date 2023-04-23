import { useQuery } from '@tanstack/react-query'
import Cookies from 'universal-cookie'
import axios, { AxiosError } from 'axios'

const URL = import.meta.env.VITE_BASE_URL

const Profile = () => {
  const cookies = new Cookies()

  useQuery({
    enabled: false,
    queryFn: () => {
      return axios.get(`${URL}/chatt/v1/auth/profile`, {
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