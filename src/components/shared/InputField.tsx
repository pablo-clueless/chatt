import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface Props {
  name: string
  type: string
  error?: string
  icon?: JSX.Element
  label?: string
  onBlur?: FocusEventHandler
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  placeholder?: string
  required?: boolean
  value?: string | number | readonly string[] | undefined
}

const InputField = ({name, type, error, icon, label, onBlur, onChange, onFocus, onKeyDown, placeholder, required, value}:Props) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false)

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