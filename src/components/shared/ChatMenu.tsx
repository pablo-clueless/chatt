import { useRef } from 'react'

import { CHAT_MENU } from 'constants/chat'
import { useClickPosition } from 'hooks'

interface Props {
    onClose: () => void
}

const ChatMenu = ({onClose}:Props) => {
    const ref = useRef<HTMLDivElement>(null)
    useClickPosition(ref, onClose)
    
  return (
    <div ref={ref} className='w-[200px] h-auto flex flex-col fixed top-28 left-40 bg-white border px-4 py-2 rounded-md !z-30'>
        {CHAT_MENU.map((menu, index) => (
            <button key={index} onClick={() => onClose()} className='w-full flex items-center gap-4 my-1 p-1 rounded-md hover:bg-gray-200 capitalize font-semibold'>
                {menu.icon}{menu.name}
            </button>
        ))}
    </div>
  )
}

export default ChatMenu