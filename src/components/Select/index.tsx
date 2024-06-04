import { Icon } from 'phosphor-react'
import { RadioInput, SelectContainer, SelectTitle } from './styles'
import { InputHTMLAttributes } from 'react'

type SelectProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  icon: Icon
}

export function Select({
  label,
  id,
  checked,
  icon: Icon,
  ...rest
}: SelectProps) {
  return (
    <SelectContainer>
      <RadioInput {...rest} id={id} type="radio" />

      <SelectTitle htmlFor={id} checked={!!checked}>
        <Icon size={16} style={{ width: 16, height: 16 }} />
        {label}
      </SelectTitle>
    </SelectContainer>
  )
}
