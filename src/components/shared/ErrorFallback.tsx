import { crash } from 'assets/images'
import Button from './Button'

const ErrorFallback = () => {

  return (
    <div className='w-screen h-screen grid place-items-center bg-red-50 px-4'>
      <div className='w-full md:w-[400px] flex flex-col items-center bg-red-500 p-5 rounded-md'>
        <img src={crash} alt='error illustration' className='w-[300px]' />
        <p className='text-lg font-medium text-white text-center my-4'>
          An error occurred while loading the page.
        </p>
        <Button
          label='reload'
          onClick={() => window.location.reload()}
          className='bg-red-200 text-red-500'
        />
      </div>
    </div>
  )
}

export default ErrorFallback