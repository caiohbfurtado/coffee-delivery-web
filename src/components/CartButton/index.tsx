import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer, NumberOfItemsNotification } from './styles'
import { AnchorHTMLAttributes, useContext } from 'react'
import { CartContext } from '../../contexts/CartContexts'

type Buttonprops = AnchorHTMLAttributes<HTMLAnchorElement>

export function CartButton({ ...rest }: Buttonprops) {
  const { cart } = useContext(CartContext)

  const hasItems = cart.length > 0

  return (
    <CartButtonContainer to="/carrinho" {...rest}>
      <ShoppingCart weight="fill" size={22} />

      {hasItems && (
        <NumberOfItemsNotification>{cart.length}</NumberOfItemsNotification>
      )}
    </CartButtonContainer>
  )
}
