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

export function SelectedItems() {
  return (
    <SelectedItemsContainer>
      <ItemsList>
        {[0, 1, 2].map((coffee) => (
          <Fragment key={coffee}>
            <CartCard />
            <Divider />
          </Fragment>
        ))}
      </ItemsList>

      <TotalContainer>
        <DetailedTotalInfo>
          <SpacedBetweenInfo>
            <span>Total de itens</span>
            <span>R$ 19,70</span>
          </SpacedBetweenInfo>
          <SpacedBetweenInfo>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </SpacedBetweenInfo>
        </DetailedTotalInfo>

        <TotalInfo>
          <SpacedBetweenInfo>
            <span>Total</span>
            <span>R$ 33,20</span>
          </SpacedBetweenInfo>
        </TotalInfo>
      </TotalContainer>

      <Button variant="primary" title="confirmar pedido" />
    </SelectedItemsContainer>
  )
}
