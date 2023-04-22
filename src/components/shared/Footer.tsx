import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from 'constants/navigation'
import Thumb from './Thumb'

const Footer = () => {
  return (
    <footer  className='w-full border-t border-t-gray-300 bg-black/[0.03]'>
      <div className='flex flex-col lg:flex-row items-start justify-between px-2 md:px-10 py-5'>
        <Thumb />
        <div className='w-full flex flex-wrap items-start justify-between gap-8 py-5 lg:w-max lg:justify-start lg:gap-32 lg:py-0'>
          {FOOTER_LINKS.map(({links, title}, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <h3 className='font-semibold text-gray-700 text-lg capitalize'>{title}</h3>
              <ul className='flex flex-col gap-3 text-gray-500 text-sm capitalize'>
                {links.map(({label, target}, index) => (
                  <Link key={index} to={target} className='hover:font-medium hover:text-gray-800 transition duration-500'>{label}</Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col sm:flex-row items-center justify-between bg-gray-700 px-2 md:px-10 py-3 text-xs'>
        <div className='text-center text-white lg:text-left'>
          <p>
            Copyright &copy; {new Date().getFullYear()} |{' '}
            <strong className="font-semibold">&ldquo;Chatt&rdquo;</strong> and the{' '}
						<strong className="font-semibold">&ldquo;Chatt logo&rdquo;</strong> are
						registered trademarks.
          </p>
          <p>
            All illustrations are from{' '}
            <a href="https://storyset.com/" className="underline">
              Storyset
            </a>
          </p>
        </div>
        <div className="mt-3 flex items-center gap-5 font-semibold text-white capitalize sm:mt-0">
          <Link to='/'>Terms & conditions</Link>
          <Link to='/'>Privacy policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer