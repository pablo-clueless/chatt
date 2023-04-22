import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Thumb = () => {
  return (
    <Link to='/' className='flex items-center gap-1 text-2xl font-bold'>
      Chatt
      <FiMessageSquare className='fill-blue-500 text-blue-500 text-3xl' />
    </Link>
  )
}

export default Thumb