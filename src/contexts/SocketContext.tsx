import { ReactNode, createContext, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'
import Cookies from 'universal-cookie'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from 'hooks'
import { add } from 'store/slices/notification'

interface Props {
    children: ReactNode
}

interface Context {
    socket: Socket
}

const URL = import.meta.env.VITE_BASE_URL
const socket:Socket = io(URL)

export const SocketContext = createContext<Context>({socket})
SocketContext.displayName = ''


const SocketProvider = ({children}:Props) => {
    const { user } = useAppSelector(store => store.user)
    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    const access_token = cookies.get('access_token')

    useEffect(() => {
        if(user) {
            socket.on('', () => {
                axios.get(`${URL}/`, {
                    headers: { 'Authorization': `Bearer ${access_token}` }
                })
                .then(({data}) => {
                    const { notification } = data
                    dispatch(add(notification))
                })
                .catch((error) => console.log(error))
            })
        }
    },[access_token, dispatch, user])

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider