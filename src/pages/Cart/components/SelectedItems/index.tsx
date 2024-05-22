import { Fragment } from 'react/jsx-runtime'

import { CartCard } from '../../../../components/CartCard'
import { Button } from '../../../../components/Button'

import {
  DetailedTotalInfo,
  Divider,
  ItemsList,
  SelectedItemsContainer,
  SpacedBetweenInfo,
  TotalContainer,
  TotalInfo,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContexts'
import { getPriceFormatted } from '../../../../utils/getPriceFormatted'

export function SelectedItems() {
  const { cart, totalCart } = useContext(CartContext)

  const deliveryPrice = 3.5
  const priceFormattedTotalCart = getPriceFormatted(totalCart)
  const priceFormattedDelivery = getPriceFormatted(deliveryPrice)
  const priceFormattedFinal = getPriceFormatted(deliveryPrice + totalCart)

  return (
    <SelectedItemsContainer>
      <ItemsList>
        {cart.map((coffee) => (
          <Fragment key={coffee.id}>
            <CartCard coffee={coffee} />
            <Divider />
          </Fragment>
        ))}
      </ItemsList>

      <TotalContainer>
        <DetailedTotalInfo>
          <SpacedBetweenInfo>
            <span>Total de itens</span>
            <span>{priceFormattedTotalCart}</span>
          </SpacedBetweenInfo>
          <SpacedBetweenInfo>
            <span>Entrega</span>
            <span>{priceFormattedDelivery}</span>
          </SpacedBetweenInfo>
        </DetailedTotalInfo>

        <TotalInfo>
          <SpacedBetweenInfo>
            <span>Total</span>
            <span>{priceFormattedFinal}</span>
          </SpacedBetweenInfo>
        </TotalInfo>
      </TotalContainer>

      <Button variant="primary" title="confirmar pedido" />
    </SelectedItemsContainer>
  )
}
