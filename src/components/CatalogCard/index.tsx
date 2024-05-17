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
  // onAdd: (value: number) => void
  // onSub: (value: number) => void
  // quantity: number
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  const { description, image, name, price, types } = coffee
  const priceFormatted = price
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

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
          <InputNumber value={0} onAdd={() => { }} onSub={() => { }} />
          <Button variant="icon" icon={ShoppingCart} iconWeight="fill" />
        </ActionsContainer>
      </CatalogCardFooter>
    </CatalogCardContainer>
  )
}
