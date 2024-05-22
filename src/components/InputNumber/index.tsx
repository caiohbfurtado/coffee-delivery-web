import { Minus, Plus } from 'phosphor-react'
import {
  InputNumberButton,
  InputNumberContainer,
  TextInputNumber,
} from './styles'

type InputNumberProps = {
  value: number
  acceptZero?: boolean
  onAdd: (value: number) => void
  onSub: (value: number) => void
}

export function InputNumber({
  value,
  onAdd,
  onSub,
  acceptZero = false,
}: InputNumberProps) {
  const isMinimum = acceptZero ? value <= 0 : value <= 1
  function handleAddValue() {
    onAdd(value + 1)
  }

  function handleSubValue() {
    onSub(value - 1)
  }

  return (
    <InputNumberContainer>
      <InputNumberButton
        disabled={isMinimum}
        type="button"
        onClick={handleSubValue}
      >
        <Minus weight="bold" size={14} />
      </InputNumberButton>
      <TextInputNumber value={value} readOnly />
      <InputNumberButton type="button" onClick={handleAddValue}>
        <Plus weight="bold" size={14} />
      </InputNumberButton>
    </InputNumberContainer>
  )
}
