import { ReactNode } from 'react'
interface Props {
  children: ReactNode
  className?: string
}

const Container = ({children, className}:Props) => {
  return (
    <div className={`px-10 py-2 ${className}`}>
      {children}
    </div>
  )
}

export default Container