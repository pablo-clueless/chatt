import { useEffect } from 'react'

import { useToast } from 'hooks'
import Toast from './Toast'

export interface ToastMessage {
  id: string
  type: 'error' | 'info' | 'success' | 'warning'
  message: string
}

const ToastContainer = () => {
  const {removeToast, toasts} = useToast()

  useEffect(() => {
    const timeoutIds:NodeJS.Timeout[] = []
    toasts.forEach((toast) => {
      const timeoutId = setTimeout(() => {
        removeToast(toast.id)
      }, 5000)
      timeoutIds.push(timeoutId)
    })

    return () => timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId))
  },[removeToast, toasts])

  return (
    <div className='w-[250px] h-auto flex flex-col gap-2 fixed top-0 right-0 !z-30 py-4 px-2'>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

export default ToastContainer