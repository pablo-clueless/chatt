import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react'

export type BoxPosition = {
    x: number
    y: number
}
interface Props {
    isDragging: boolean
    position: BoxPosition
    setIsDragging: Dispatch<SetStateAction<boolean>>
}

export const useDraggable = ({isDragging, position, setIsDragging}:Props) => {
    const [boxPosition, setBoxPosition] = useState<BoxPosition>(position)

    const initialMousePosition = useRef<BoxPosition>({x: 0, y: 0})

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMouseMove = (e:any) => {
            if(!isDragging) return
            const dx = e.clientX - initialMousePosition.current.x
            const dy = e.clientY - initialMousePosition.current.y
            setBoxPosition(current => ({
                x: current.x + dx,
                y: current.y + dy
            }))
            initialMousePosition.current = {x: e.clientX, y: e.clientY}
        }

        const handleMouseUp = () => setIsDragging(false)

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    },[isDragging, setIsDragging])

    const handleMouseDown = (e:MouseEvent<HTMLDivElement>) => {
        initialMousePosition.current = { x: e.clientX, y: e.clientY }
        setIsDragging(true)
    }
    
    return {boxPosition, handleMouseDown}
}