/* eslint-disable prettier/prettier */
import { ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  Badge,
  BadgesContainer,
  CatalogCardContainer,
  CatalogCardContent,
  CatalogCardFooter,
  CatalogCardHeader,
  ValueText,
} from './styles'

import { InputNumber } from '../InputNumber'
import { Button } from '../Button'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContexts'
import { getPriceFormatted } from '../../utils/getPriceFormatted'
import { useNavigate } from 'react-router-dom'

export type TypesOfCoffee =
  | 'Tradicional'
  | 'Especial'
  | 'Com Leite'
  | 'Gelado'
  | 'Alcoólico'

type CoffeeProps = {
  id: number
  image: string
  types: TypesOfCoffee[]
  name: string
  description: string
  price: number
}

type CatalogCardProps = {
  coffee: CoffeeProps
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  const navigate = useNavigate()

  const { description, image, name, price, types } = coffee
  const { addItemToCart, cart, subItemToCart } = useContext(CartContext)

  const hasItemInCart = cart.find(currentCoffee => currentCoffee.id === coffee.id)

  const priceFormatted = getPriceFormatted(price).replace('R$', '')

  return (
    <CatalogCardContainer>
      <CatalogCardHeader>
        <img src={image} alt={name} />

        <BadgesContainer>
          {types.map((typeOfCoffee) => (
            <Badge key={typeOfCoffee}>{typeOfCoffee}</Badge>
          ))}
        </BadgesContainer>
      </CatalogCardHeader>

      <CatalogCardContent>
        <h2>{name}</h2>

        <p>{description}</p>
      </CatalogCardContent>

      <CatalogCardFooter>
        <ValueText>
          R$<span>{priceFormatted}</span>
        </ValueText>

        <ActionsContainer>
          <InputNumber acceptZero value={hasItemInCart ? hasItemInCart.quantity : 0} onAdd={() => addItemToCart(coffee.id)} onSub={() => subItemToCart(coffee.id)} />
          <Button variant="icon" icon={ShoppingCart} iconWeight="fill" onClick={() => navigate('/carrinho')} />
        </ActionsContainer>
      </CatalogCardFooter>
    </CatalogCardContainer>
  )
}
