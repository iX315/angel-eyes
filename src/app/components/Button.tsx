import {ClassNameValue, twMerge} from 'tailwind-merge'
import {noop} from '../utils/helpers'
import {ReactNode} from 'react'

type ButtonProps = {
  className?: ClassNameValue
  onClick?: () => void
  children?: ReactNode
}

export const Button = ({className, onClick = noop, children}: ButtonProps) => {
  return (
    <button className={twMerge('border border-red-100 p-2', className)} onClick={onClick}>
      {children}
    </button>
  )
}
