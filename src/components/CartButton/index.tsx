import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer, NumberOfItemsNotification } from './styles'
import { ButtonHTMLAttributes } from 'react'

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement>

export function CartButton({ ...rest }: Buttonprops) {
  return (
    <CartButtonContainer {...rest}>
      <ShoppingCart weight="fill" size={22} />

      <NumberOfItemsNotification>3</NumberOfItemsNotification>
    </CartButtonContainer>
  )
}
