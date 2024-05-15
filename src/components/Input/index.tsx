import { InputHTMLAttributes } from 'react'
import { InputText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return <InputText {...rest} />
}
