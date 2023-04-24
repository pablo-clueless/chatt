import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

import Toast from './Toast'

export interface ToastMessage {
  id: string
  message: string
  type: 'error' | 'info' | 'success' | 'warning'
}

interface Props {
  toasts: ToastMessage[]
  setToasts: Dispatch<SetStateAction<ToastMessage[]>>
}

const ToastContainer = ({setToasts, toasts}:Props) => {
  const removeToast = useCallback((id:string) => {
    setToasts(current => current.filter(toast => toast.id !== id))
  },[setToasts])

  useEffect(() => {
    const timeoutIds:NodeJS.Timeout[] = []
    toasts.forEach(toast => {
      const timeoutId = setTimeout(() => {
        removeToast(toast.id)
        timeoutIds.push(timeoutId)
      }, 5000)
    })
    return () => {
      timeoutIds.forEach((timeoutId) => {
        clearTimeout(timeoutId)
      })
    }
  },[removeToast, toasts])

  return (
    <div className='w-[250px] h-[auto] p-4 fixed top-0 right-0 !z-40 select-none'>
      {toasts.map((toast) => (
        <Toast
        message={toast.message}
        onClose={() => removeToast(toast.id)}
        type={toast.type}
        />
      ))}
    </div>
  )
}

export default ToastContainer