import { Link } from 'react-router-dom'

interface Props {
  label: string | JSX.Element
  className?: string
  disabled?: boolean
  href?: string
  icon?: JSX.Element
  onClick?: () => void
  to?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({label, className, disabled, href, icon, onClick, to, type}:Props) => {
  if(href) {
    return (
      <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center gap-1 appearance-none rounded px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 capitalize font-medium ${className}`}>
        {icon}
        {label}
      </a>
    )
  }

  if(to) {
    return (
      <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-center gap-1 appearance-none rounded px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 capitalize font-medium ${className}`}>
        {icon}
        {label}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-1 appearance-none rounded px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 capitalize font-medium ${className}`}>
        {icon}
      {label}
    </button>
  )
}

export default Button