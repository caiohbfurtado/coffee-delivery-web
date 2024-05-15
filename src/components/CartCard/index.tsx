import { CartCardContainer, CartCardContent, PriceText } from './styles'

import expressoPng from '../../assets/photos/expresso.png'
import { InputNumber } from '../InputNumber'
import { Button } from '../Button'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function CartCard() {
  const [quantity, setQuantity] = useState(1)
  return (
    <CartCardContainer>
      <img src={expressoPng} alt="Café expresso" />

      <CartCardContent>
        <span>Expresso Tradicional</span>

        <div>
          <InputNumber
            value={quantity}
            onAdd={setQuantity}
            onSub={setQuantity}
          />
          <Button variant="secondary" icon={Trash} title="remover" />
        </div>
      </CartCardContent>

      <PriceText>R$ 9,90</PriceText>
    </CartCardContainer>
  )
}
