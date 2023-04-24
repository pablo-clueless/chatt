import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from 'constants/navigation'
import { SOCIAL_HANDLES } from 'constants/chat'
import Thumb from './Thumb'

const Footer = () => {
  return (
    <footer  className='w-full border-t border-t-gray-300 bg-black/[0.03] py-4 select-none'>
      <div className='flex flex-col-reverse lg:flex-row items-start px-2 md:px-10 py-5'>
        <div className='w-full md:w-[500px] flex flex-col items-center gap-5'>
          <div className='flex flex-col items-center'>
            <Thumb size='large' />
            <span className='text-xs font-bold text-gray-700'>ALPHA</span>
          </div>
          <div className='w-full flex flex-col items-center text-sm'>
            <div className='text-center text-gray-500'>
              <p>Copyright &copy; {new Date().getFullYear()}</p>
              <p>
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
          </div>
        </div>
        <div className='w-full flex-1 flex flex-wrap items-start justify-between gap-8 py-5 lg:w-max lg:justify-start lg:gap-32 lg:py-0'>
          {FOOTER_LINKS.map(({links, title}, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <h3 className='font-semibold text-gray-700 text-lg capitalize'>{title}</h3>
              <ul className='flex flex-col gap-3 text-gray-500 text-sm capitalize'>
                {links.map(({label, target}, index) => (
                  <Link key={index} to={target} className='hover:font-medium hover:text-gray-800 transition'>{label}</Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-2 my-4'>
        <a href="https://forms.gle/HdrjnKqSMRvPcmzb9" target='_blank' rel='noreferrer' className='text-lg text-blue-900 font-semibold underline'>
          [send feedback]
        </a>
        <div className='w-full flex items-center justify-center gap-4'>
          {SOCIAL_HANDLES.map((handle, index) => (
            <a key={index} href={handle.target} target='_blank' rel='noreferrer' className='text-2xl text-gray-500'>
              {handle.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer