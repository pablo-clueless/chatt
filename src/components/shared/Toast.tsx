import { FiAlertCircle, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'

interface Props {
  message: string
  type: 'error' | 'info' | 'success' | 'warning'
  onClose: () => void
}

const ToastStyle:Record<string, string> = {
  'error': 'bg-red-100 text-red-500 border-red-500',
  'info': 'bg-blue-100 text-blue-500 border-blue-500',
  'sucess': 'bg-green-100 text-green-500 border-green-500',
  'warning': 'bg-amber-100 text-amber-500 border-amber-500',
}

const ToastIcon:Record<string, JSX.Element> = {
  'error': <FiAlertCircle className='text-xl' />,
  'info': <FiAlertCircle className='text-xl' />,
  'sucess': <FiCheckCircle className='text-xl' />,
  'warning': <FiAlertTriangle className='text-xl' />,
}

const Toast = ({message, onClose, type}:Props) => {
  return (
    <div onClick={() => onClose()} className={`w-full flex items-center gap-2 ${ToastStyle[type]}`}>
      {ToastIcon[type]} {message}
    </div>
  )
}

export default Toast