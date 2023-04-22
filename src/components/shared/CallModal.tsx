import { FiMaximize2, FiMic, FiMicOff, FiMinimize2, FiPhone, FiVideo, FiVideoOff, FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import { useDraggable } from 'hooks'
import { User } from 'types'

interface Props {
  onClose: () => void
  stream: MediaStream | null
  type: 'none' | 'audio' | 'video'
  user: User
}

const CallModal = ({onClose, stream, type, user}:Props) => {
  const [showVideo, setShowVideo] = useState<boolean>(type === 'video' || false)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [muteAudio, setMuteAudio] = useState<boolean>(false)
  const videoGrid = document.getElementById('video')
  const video = document.createElement('video')

  const {boxPosition, handleMouseDown} = useDraggable({
    isDragging,
    position: {x: 0, y: 0},
    setIsDragging
  })

  useEffect(() => {
    const addVideoStream = (video:HTMLVideoElement, stream:MediaStream) => {
      video.srcObject = stream
      video.addEventListener('loadeddata', () => video.play())
    }
    if(stream) {
      addVideoStream(video, stream)
      videoGrid?.append(video)
    }
  },[stream, video, videoGrid])

  return (
    <div
      className={`fixed bg-gray-900 rounded-md border p-3 ${isFullScreen ? 'w-screen h-screen' : 'w-[400px] h-auto'} ${isDragging ? 'cursor-grab' : 'cursor-default'}`}
      onMouseDown={handleMouseDown}
      style={{top: isFullScreen ? 0 : boxPosition.y, left: isFullScreen ? 0 : boxPosition.x}}>
      <div className='w-full flex items-center justify-between'>
        <button onClick={() => onClose()} className='text-white text-2xl'>
          <FiX />
        </button>
        <p className='text-white font-semibold text-lg'>@{user.username}</p>
        <button onClick={() => setIsFullScreen(current => !current)} className='text-white text-2xl'>
          {isFullScreen ? <FiMinimize2 /> : <FiMaximize2 />}
        </button>
      </div>
      <div className={`'w-full my-4 rounded-sm border ${isFullScreen ? 'h-[800px]' : 'h-[500px]'}`}>
        {type === 'audio' && (
          <div className='w-full h-full'>
            <audio id='audio' className='w-full h-full'></audio>
          </div>
        )}
        {type === 'video' && showVideo && (
          <div className='w-full h-full'>
            <video id='video' className='w-full h-full'></video>
          </div>
        )}
      </div>
      <div className='w-full flex items-center justify-center gap-5'>
        <button onClick={() => setMuteAudio(current => !current)} className='bg-white rounded-full p-2'>
          {muteAudio ? <FiMicOff /> : <FiMic />}
        </button>
        <button className='bg-red-500 rounded-full p-2'>
          <FiPhone className='text-white text-3xl rotate-[135deg]' />
        </button>
        <button onClick={() => setShowVideo(current => !current)} className='bg-white rounded-full p-2'>
          {showVideo ? <FiVideo /> : <FiVideoOff />}
        </button>
      </div>
    </div>
  )
}

export default CallModal