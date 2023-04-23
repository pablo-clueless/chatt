import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface Props {
  element: 'input' | 'textarea'
  name: string
  error?: string
  icon?: JSX.Element
  label?: string
  onBlur?: FocusEventHandler
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  placeholder?: string
  required?: boolean
  type?: string
  value?: string | number | readonly string[] | undefined
}

const InputField = ({element, name, error, icon, label, onBlur, onChange, onFocus, onKeyDown, placeholder, required, type, value}:Props) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false)

  if(element === 'textarea') {
    return (
      <div className='w-full flex flex-col'>
        <label htmlFor={name} className={`text-sm font-medium ${error ? 'text-red-500': 'text-gray-400'}`}>
          {label} {required && <sup className='text-red-500'>*</sup>}
        </label>
        <textarea
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={`w-full h-[150px] flex items-center gap-2 px-1 py-3 border rounded-sm outline-none resize-none ${error ? 'border-red-500 text-red-500': 'border-gray-400'}`}>
        </textarea>
        {error && <p className='w-[300px] text-[10px] text-red-500'>{error}</p>}
      </div>
    )
  }

  if(type === 'checkbox') {
    return (
      <div className=''>
        <label htmlFor={name} className="flex cursor-pointer items-center gap-2 text-sm">
          <input type='checkbox' name={name} id={name} value={value} onChange={onChange} className='peer sr-only rounded accent-gray-300' />
          <div className="relative h-4 w-4 rounded border-2 border-gray-400 transition-opacity after:absolute after:top-1/2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-gray-700 after:opacity-0 peer-checked:after:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2" />
          <span>{label}</span>
        </label>
        {error && <p className='w-[300px] text-[10px] text-red-500'>{error}</p>}
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col'>
      <label htmlFor={name} className={`text-sm font-medium ${error ? 'text-red-500': 'text-gray-400'}`}>
        {label} {required && <sup className='text-red-500'>*</sup>}
      </label>
      <div className={`w-full flex items-center gap-2 px-1 py-3 border rounded-sm ${error ? 'border-red-500 text-red-500': 'border-gray-400'}`}>
        {icon}
        <input
          type={togglePassword ? 'text' : type}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          required={required}
          className={`w-full min-w-[300px] h-full appearance-none outline-none`}
        />
        {type === 'password' ? (
          <button type='button' onClick={() => setTogglePassword(current => !current)} className='text-xl transition-transform'>
            {togglePassword ? <FiEyeOff /> : <FiEye />}
          </button>
        ): null}
      </div>
      {error && <p className='w-[300px] text-[10px] text-red-500'>{error}</p>}
    </div>
  )
}

export default InputField