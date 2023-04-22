import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

const Auth = () => {
    const cookies = new Cookies()
    const token = cookies.get('access_token')

    return token ? <Outlet /> : <Navigate to='/' />
}

export default Auth