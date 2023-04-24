import { v4 as uuidv4 } from 'uuid'

import { ToastMessage } from 'components/shared/ToastContainer'

type ToastType = 'error' | 'info' | 'success' | 'warning'

const useToast = () => {
    const addToast = (message:string, type: ToastType) => {
        const newToast:ToastMessage = {
            id: uuidv4(),
            message,
            type
        }
        console.log(newToast)
    }

    return addToast
}

export default useToast