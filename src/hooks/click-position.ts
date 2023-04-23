import { RefObject, useEffect } from 'react'

export const useClickPosition = (ref:RefObject<Element>, onClick:() => void) => {
    useEffect(() => {
        const handleClick = (e:MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)) {
                onClick()
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    },[onClick, ref])
}