import { ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  Badge,
  CatalogCardContainer,
  CatalogCardContent,
  CatalogCardFooter,
  CatalogCardHeader,
  ValueText,
} from './styles'

import { InputNumber } from '../InputNumber'
import { Button } from '../Button'

type CatalogCardProps = {
  image: string
  type: 'tradicional'
  title: string
  description: string
  price: number
  quantity: number
  onAdd: (value: number) => void
  onSub: (value: number) => void
}

export function CatalogCard({
  description,
  image,
  price,
  quantity,
  title,
  type,
  onAdd,
  onSub,
}: CatalogCardProps) {
  const priceFormatted = price
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return (
    <CatalogCardContainer>
      <CatalogCardHeader>
        <img src={image} alt={title} />

        <Badge>{type}</Badge>
      </CatalogCardHeader>

      <CatalogCardContent>
        <h2>{title}</h2>

        <p>{description}</p>
      </CatalogCardContent>

      <CatalogCardFooter>
        <ValueText>
          R$<span>{priceFormatted}</span>
        </ValueText>

        <ActionsContainer>
          <InputNumber value={quantity} onAdd={onAdd} onSub={onSub} />
          <Button variant="icon" icon={ShoppingCart} iconWeight="fill" />
        </ActionsContainer>
      </CatalogCardFooter>
    </CatalogCardContainer>
  )
}
