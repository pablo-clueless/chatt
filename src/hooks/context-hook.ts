import { useContext } from 'react'

import { AppContext } from 'contexts/AppContext'
import { SocketContext } from 'contexts/SocketContext'

export const useAppContext = () => useContext(AppContext)

export const useSocketContext = () => useContext(SocketContext)