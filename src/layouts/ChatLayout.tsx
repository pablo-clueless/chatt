import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FiEdit, FiMoreVertical, FiSearch } from 'react-icons/fi'
import Cookies from 'universal-cookie'
import axios from 'axios'

import { useAppContext } from 'hooks'
import { Navbar } from 'components'
import { CONTACTS } from 'TEST'
import { User } from 'types'

interface Props {
  children: ReactNode
  id: string | undefined
  setPeer: Dispatch<SetStateAction<User | null>>
}

const URL = import.meta.env.VITE_BASE_URL

const ChatLayout = ({children, id, setPeer}:Props) => {
  const [peerId, setPeerId] = useState<string>('')
  const { chatBackground } = useAppContext()
  const cookies = new Cookies()

  useQuery({
    enabled: false,
    queryFn: () => {
      return axios.get(`${URL}/get-chat-history/${id}`, {
        headers: { 'Authorization': `Bearer ${cookies.get('access_token')}`}
      })
    },
    queryKey: [''],
    onSuccess: ({data}) => {
      console.log(data)
    }
  })
  
  useEffect(() => {
    const peer = CONTACTS.find(contact => contact._id === peerId)
    if(peer) {
      setPeer(peer)
    }
  },[peerId, setPeer])

  return (
    <>
    <Navbar />
    <div className='w-full h-[92vh] flex items-center'>
      <div className='w-0 md:w-[300px] h-full flex flex-col gap-2 px-2 bg-gray-100 border-r'>
        <div className='w-full flex items-center justify-between py-4'>
          <p></p>
          <div className='flex items-center gap-4'>
            <FiEdit className='cursor-pointer' />
            <FiMoreVertical className='cursor-pointer' />
          </div>
        </div>
        <div className='w-full h-[50px] flex items-center gap-3 bg-gray-300 px-2 py-2 rounded-sm'>
          <input type='text' className='w-full h-full bg-transparent outline-none' />
          <FiSearch className='text-2xl' />
        </div>
        <div className='w-full flex flex-col gap-1 py-2 overflow-y-scroll'>
          {CONTACTS.map((contact) => (
            <div
              key={contact._id}
              onClick={() => setPeerId(contact._id)}
              className={`w-full flex items-center gap-4 px-4 py-2 rounded-sm cursor-pointer transition ${contact._id === peerId ? 'bg-gray-400' : 'hover:bg-gray-200'}`}>
              <img src={contact.avatar} alt={contact.full_name} className='w-[40px] h-[40px] rounded-full object-cover' />
              <div className='flex flex-col'>
                <p className='font-medium'>{contact.full_name}</p>
                <p className='text-xs font-bold text-gray-500'>@{contact.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background: chatBackground}} className='w-full flex-1 h-full bg-no-repeat bg-cover'>
        {children}
      </div>
    </div>
    </>
  )
}

export default ChatLayout