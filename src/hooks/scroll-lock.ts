import { useLayoutEffect } from 'react'

interface Props {
    isOpen: boolean
}

export const useScrollLock = ({isOpen}:Props) => {
    useLayoutEffect(():(() => void) => {
        const overflow:string = window.getComputedStyle(document.body).overflow
        if(isOpen) {
            document.body.style.overflow = 'hidden'
        }
        return () => document.body.style.overflow = overflow
    },[isOpen])
}