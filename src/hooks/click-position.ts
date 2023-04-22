import { RefObject, useEffect } from 'react'

export const useClickPosition = (ref:RefObject<Element>, onClick:() => void) => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClick = (e:any) => {
            if(ref.current && !ref.current.contains(e.target as Node)) {
                onClick()
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    },[onClick, ref])
}