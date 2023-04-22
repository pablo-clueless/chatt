import { FiMic, FiMessageSquare, FiPhone, FiPlusCircle, FiVideo } from 'react-icons/fi'
import { KeyboardEvent, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Peer } from 'peerjs'

import { useAppSelector, usePageTitle, useSocketContext } from 'hooks'
import { CallModal } from 'components'
import { ChatLayout } from 'layouts'
import { User } from 'types'

interface CallType {
  stream: MediaStream | null
  type: 'none' | 'audio' | 'video'
}

const Chat = () => {
  const [calls, setCalls] = useState<CallType>({stream: null, type: 'none'})
  const [availablePeer, setAvailablePeer] = useState<User | null>(null)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const { user } = useAppSelector(store => store.user)
  const { getUserMedia } = navigator.mediaDevices
  usePageTitle(`@${availablePeer?.username}`)
  const {socket} = useSocketContext()

  const peer = new Peer({host: ''})

  const addVideoStream = (video:HTMLVideoElement, stream:MediaStream) => {
    video.srcObject = stream
    video.addEventListener('loadeddata', () => video.play())
  }

  const connectToUser = (id:string, stream:MediaStream) => {
    const call = peer.call(id, stream)
    const video = document.createElement('video')
    call.on('stream', (remoteStream) => {
      addVideoStream(video, remoteStream)
    })
    call.on('close', () => video.remove())
  }

  const makeAudioCall = async(id:string) => {
    const stream = await getUserMedia({audio: true})
    const call = peer.call(id, stream)
    call.on('stream', (remoteStream) => {
      setCalls({stream: remoteStream, type: 'audio'})
      console.log(remoteStream)
    })
    call.on('close', () => {
      setCalls({stream: null, type: 'none'})
    })
  }

  const makeVideoCall = async(id:string) => {
    const stream = await getUserMedia({audio: true, video: true})
    const call = peer.call(id, stream)
    const video = document.createElement('video')
    call.on('stream', (remoteStream) => {
      setCalls({stream: remoteStream, type: 'video'})
      addVideoStream(video, remoteStream)
      socket.on('video-call', (id:string) => {
        connectToUser(id, remoteStream)
      })
    })
    call.on('close', () => {
      setCalls({stream: null, type: 'none'})
    })
  }
  
  const handleKeyDown = (e:KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      const message = e.currentTarget.value
      if(!message) return
      console.log(message)
      e.currentTarget.value = ''
    }
  }

  return (
    <ChatLayout id={user?._id} setPeer={setAvailablePeer}>
      {availablePeer ? (
        <>
        {calls.type !== 'none' && (
          <CallModal
            {...calls}
            onClose={() => setCalls({stream: null, type: 'none'})}
            user={availablePeer}
          />
        )}
        <div className='w-full h-full flex items-center'>
          <div className='w-full h-full transition duration-500 ease-in-out'>
            <div className='w-full flex items-center justify-between p-4 bg-gray-300'>
              <div onClick={() => setOpenMenu(true)} className='flex items-center gap-2 cursor-pointer'>
                <img src={availablePeer.avatar} alt={availablePeer.full_name} className='w-[30px] h-[30px] rounded-full object-cover' />
                <div className='flex flex-col'>
                  <p className='text-lg font-semibold'>@{availablePeer.username}</p>
                  <p className='text-xs font-bold'>offline</p>
                </div>
              </div>
              <div className='flex items-center gap-4 text-xl'>
                <FiPhone onClick={() => makeAudioCall(availablePeer._id)} className='cursor-pointer' />
                <FiVideo onClick={() => makeVideoCall(availablePeer._id)} className='cursor-pointer' />
              </div>
            </div>
            <div className='w-full h-4/5'></div>
            <div className='w-full h-auto flex items-center gap-2 px-2 py-1'>
              <FiPlusCircle className='text-2xl text-gray-300 cursor-pointer' />
              <textarea onKeyDown={handleKeyDown} className='w-full min-h-[80px] flex-1 rounded-sm border border-gray-300 resize-none px-2 py-1'></textarea>
              <FiMic className='text-2xl text-gray-300 cursor-pointer' />
            </div>
          </div>
          <div className={`h-full border-l transition duration-500 ease-in-out ${openMenu ? 'w-1/2' : 'w-0'}`}>
            {openMenu && (
              <>
              <div className='w-full flex items-center justify-start px-2 py-2'>
                <button onClick={() => setOpenMenu(false)}>
                  <IoArrowBack />
                </button>
              </div>
              <div className='w-full flex flex-col items-center'>
                <img src={availablePeer.avatar} alt={availablePeer.full_name} className='w-[100px] h-[100px] rounded-full object-cover my-2' />
                <p className='text-2xl font-medium'>{availablePeer.full_name}</p>
                <p className='text-lg font-medium'>@{availablePeer.username}</p>
                <p className='text-xs font-bold text-gray-300'>{availablePeer.email}</p>
              </div>
              </>
            )}
          </div>
        </div>
        </>
      ):(
        <div className='w-full h-full grid place-items-center'>
          <div className='flex flex-col items-center'>
            <div className='flex items-center gap-1 font-bold text-9xl text-gray-300'>
              Chat
              <FiMessageSquare />
            </div>
            <p className='text-sm font-semibold text-gray-300'>IMs, VoIP and Video calls</p>
          </div>
        </div>
      )}
    </ChatLayout>
  )
}

export default Chat