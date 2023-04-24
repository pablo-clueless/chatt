import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FiEdit, FiMoreVertical, FiSearch } from 'react-icons/fi'
import Cookies from 'universal-cookie'
import axios from 'axios'

import { ChatMenu, Navbar } from 'components'
import { CONTACTS } from 'TEST'
import { User } from 'types'

interface Props {
  children: ReactNode
  id: string | undefined
  online: 'offline' | 'online'
  peerId: string
  setPeer: Dispatch<SetStateAction<User | null>>
}

const URL = import.meta.env.VITE_BASE_URL
const StateMode:Record<string, string> = {
  offline: 'text-red-500',
  online: 'text-green-500',
}

const ChatLayout = ({children, id, online, setPeer}:Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [peerId, setPeerId] = useState<string>('')
  const cookies = new Cookies()

  useQuery({
    enabled: false,
    queryFn: () => {
      return axios.get(`${URL}/chatt/v1/chatt/v1/get-chat-history/${id}`, {
        headers: { 'Authorization': `Bearer ${cookies.get('access_token')}`}
      })
    },
    queryKey: [''],
    onSuccess: ({data}) => {
      console.log(data)
    }
  })
  
  useEffect(() => {
    const peer = CONTACTS.find(contact => contact.id === peerId)
    if(peer) {
      setPeer(peer)
    }
  },[peerId, setPeer])

  return (
    <>
    {isMenuOpen && (
      <ChatMenu
        onClose={() => setIsMenuOpen(false)}
      />
    )}
    <Navbar />
    <div className='w-full h-[92vh] flex items-center'>
      <div className='w-0 md:w-[300px] h-full flex flex-col gap-2 px-2 bg-gray-100 border-r'>
        <div className='w-full flex items-center justify-between py-4'>
          <p className={`text-sm font-bold ${StateMode[online]}`}>{online}</p>
          <div className='flex items-center gap-4'>
            <button className=''>
              <FiEdit />
            </button>
            <button onClick={() => setIsMenuOpen(true)} className=''>
              <FiMoreVertical />
            </button>
          </div>
        </div>
        <div className='w-full h-[50px] flex items-center gap-3 bg-gray-300 px-2 py-2 rounded-sm'>
          <input type='text' className='w-full h-full bg-transparent outline-none' />
          <FiSearch className='text-2xl' />
        </div>
        <div className='w-full flex flex-col gap-1 py-2 overflow-y-scroll'>
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setPeerId(contact.id)}
              className={`w-full flex items-center gap-4 px-4 py-2 rounded-sm cursor-pointer transition ${contact.id === peerId ? 'bg-gray-400' : 'hover:bg-gray-200'}`}>
              <img src={contact.avatar} alt={contact.full_name} className='w-[40px] h-[40px] rounded-full object-cover' />
              <div className='flex flex-col'>
                <p className='font-medium'>{contact.full_name}</p>
                <p className='text-xs font-bold text-gray-500'>@{contact.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex-1 h-full bg-no-repeat bg-cover'>
        {children}
      </div>
    </div>
    </>
  )
}

export default ChatLayout