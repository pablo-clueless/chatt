import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface Props {
  size: 'normal' | 'large' | 'x-large'
}

const ThumbStyle:Record<string, string> = {
  'normal': 'text-2xl',
  'large': 'text-4xl',
  'x-large': 'text-6xl',
}

const Thumb = ({size}:Props) => {
  return (
    <Link to='/' className={`flex items-center gap-1 font-bold ${ThumbStyle[size]}`}>
      Chatt
      <FiMessageSquare className='fill-blue-500 text-blue-500' />
    </Link>
  )
}

export default Thumb