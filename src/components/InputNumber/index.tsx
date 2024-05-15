import { Minus, Plus } from 'phosphor-react'
import {
  InputNumberButton,
  InputNumberContainer,
  TextInputNumber,
} from './styles'

type InputNumberProps = {
  value: number
  onAdd: (value: number) => void
  onSub: (value: number) => void
}

export function InputNumber({ value, onAdd, onSub }: InputNumberProps) {
  const isMinimum = value <= 1
  function handleAddValue() {
    onAdd(value + 1)
  }

  function handleSubValue() {
    if (!isMinimum) {
      onSub(value - 1)
    }
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
