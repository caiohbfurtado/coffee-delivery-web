import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer, NumberOfItemsNotification } from './styles'
import { AnchorHTMLAttributes } from 'react'

type Buttonprops = AnchorHTMLAttributes<HTMLAnchorElement>

export function CartButton({ ...rest }: Buttonprops) {
  return (
    <CartButtonContainer to="/carrinho" {...rest}>
      <ShoppingCart weight="fill" size={22} />

      <NumberOfItemsNotification>3</NumberOfItemsNotification>
    </CartButtonContainer>
  )
}
