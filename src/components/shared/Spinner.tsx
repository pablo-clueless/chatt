interface Props {
  size: 'small' | 'medium' | 'large'
  weight: 'thin' | 'medium' | 'thick'
  color?: string
}

const SIZE:Record<string, string> = {
  small: 'w-[20px] h-[20px]',
  medium: 'w-[40px] h-[40px]',
  large: 'w-[60px] h-[60px]',
}

const WEIGHT:Record<string, string> = {
  thin: 'border-2',
  medium: 'border-4',
  thick: 'border-8',
}

const Spinner = ({size, weight, color}:Props) => {
  return (
    <div style={{borderColor: color}} className={`${SIZE[size]} ${WEIGHT[weight]} rounded-full border-white border-b-transparent animate-spin`}></div>
  )
}

export default Spinner