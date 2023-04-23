import { FiAlertCircle, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import { ToastMessage } from './ToastContainer'

export interface ToastProps {
    onClose: (id: string) => void
    toast: ToastMessage
}

const ToastEffect:Record<string, string> = {
    error: 'bg-red-100 text-red-500 border-red-500',
    info: 'bg-blue-100 text-blue-500 border-blue-500',
    success: 'bg-green-100 text-green-500 border-green-500',
    warning: 'bg-amber-100 text-amber-500 border-amber-500',
}

const ToastIcon:Record<string, JSX.Element> = {
    error: <FiAlertCircle />,
    info: <FiAlertCircle />,
    success: <FiCheckCircle />,
    warning: <FiAlertTriangle />,
}

const Toast = ({onClose, toast}:ToastProps) => {
    const [visible, setVisible] = useState<boolean>(true)
    const {id, message, type} = toast

    const closeToast = () => {
        setVisible(false)
        onClose(id)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000)
        return () => clearTimeout(timer)
    },[])

    return (
        <div
            onClick={() => closeToast()}
            className={`w-full flex items-center gap-1 p-2 border-b-2 cursor-pointer ${ToastEffect[type]} ${visible}`}>
            {ToastIcon[type]}
            <p>{message}</p>
        </div>
    )
}

export default Toast