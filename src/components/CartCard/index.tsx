import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { InputNumber } from '../InputNumber'
import { Button } from '../Button'

import { CartCardContainer, CartCardContent, PriceText } from './styles'
import { getPriceFormatted } from '../../utils/getPriceFormatted'
import { CartContext, CoffeeInCart } from '../../contexts/CartContexts'

type CartCardProps = {
  coffee: CoffeeInCart
}

export function CartCard({ coffee }: CartCardProps) {
  const { addItemToCart, subItemToCart, removeCoffeeToCart } =
    useContext(CartContext)

  const priceFormatted = getPriceFormatted(coffee.price)

  return (
    <CartCardContainer>
      <img src={coffee.image} alt="Café expresso" />

      <CartCardContent>
        <span>{coffee.name}</span>

        <div>
          <InputNumber
            value={coffee.quantity}
            onAdd={() => addItemToCart(coffee.id)}
            onSub={() => subItemToCart(coffee.id)}
          />
          <Button
            variant="secondary"
            type="button"
            icon={Trash}
            title="remover"
            onClick={() => {
              console.log('entrou')

              removeCoffeeToCart(coffee.id)
            }}
          />
        </div>
      </CartCardContent>

      <PriceText>{priceFormatted}</PriceText>
    </CartCardContainer>
  )
}
