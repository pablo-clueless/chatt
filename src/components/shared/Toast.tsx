import { FiAlertCircle, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

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

const transition = {default: {duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
const initial = {x: '-100%'}
const animate = {x: 0}

const Toast = ({message, onClose, type}:Props) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      onClick={() => onClose()}
      className={`w-full flex items-center gap-2 p-2 border-r-2 cursor-pointer ${ToastStyle[type]}`}>
      {ToastIcon[type]}
      <span>{message}</span>
    </motion.div>
  )
}

export default Toast