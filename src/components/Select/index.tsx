import { CreditCard } from 'phosphor-react'
import { RadioInput, SelectContainer, SelectTitle } from './styles'
import { InputHTMLAttributes } from 'react'

type SelectProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
}

export function Select({ label, id, checked, ...rest }: SelectProps) {
  return (
    <SelectContainer>
      <RadioInput {...rest} id={id} type="checkbox" />

      <SelectTitle htmlFor={id} checked={!!checked}>
        <CreditCard size={16} />
        {label}
      </SelectTitle>
    </SelectContainer>
  )
}
