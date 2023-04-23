import { v4 as uuidV4 } from 'uuid'
import { useState } from 'react'

import { ToastMessage } from 'components/shared/ToastContainer'

interface Props {
  message:string
  type:'error' | 'info' | 'success' | 'warning'
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = ({message, type}:Props) => {
    const newToast:ToastMessage = {
      id: uuidV4(),
      message,
      type,
    }
    setToasts(current => [...current, newToast])
  }
  
  const removeToast = (id:string) => {
    setToasts(current => current.filter(toast => toast.id === id))
  }

  return {addToast, removeToast, toasts}
}