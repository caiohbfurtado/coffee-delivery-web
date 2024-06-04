import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container } from '../../components/Container'
import { SuccessIllustrationSVG } from '../../components/svgs/SuccessIllustrationSVG'
import {
  BoxInfo,
  ContentInfo,
  HeaderInfo,
  IconContainer,
  OrderInfo,
  SuccessContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContexts'

const PAYMENT_INFO = {
  credit_card: 'Cartão de Crédito',
  debit_card: 'Cartão de Débito',
  money: 'Dinheiro',
}

export function Success() {
  const {
    orderInfo: { street, number, neighborhood, city, state, payment },
  } = useContext(CartContext)

  const {
    colors: { branding },
  } = useTheme()

  return (
    <Container>
      <SuccessContainer>
        <ContentInfo>
          <HeaderInfo>
            <h2>Uhu! Pedido confirmado</h2>

            <p>Agora é só aguardar que logo o café chegará até você</p>
          </HeaderInfo>

          <BoxInfo>
            <div>
              <OrderInfo>
                <IconContainer color={branding['purple-medium']}>
                  <MapPin size={16} weight="fill" />
                </IconContainer>
                <p>
                  Entrega em{' '}
                  <span>
                    {street}, {number}
                  </span>{' '}
                  <br />
                  {neighborhood} - {city}, {state}
                </p>
              </OrderInfo>

              <OrderInfo>
                <IconContainer color={branding['yellow-medium']}>
                  <Timer size={16} weight="fill" />
                </IconContainer>
                <p>
                  Previsão de entrega <br />
                  <span>20 min - 30 min</span>
                </p>
              </OrderInfo>

              <OrderInfo>
                <IconContainer color={branding['yellow-dark']}>
                  <CurrencyDollar size={16} />
                </IconContainer>
                <p>
                  Pagamento na entrega <br />
                  <span>{PAYMENT_INFO[payment]}</span>
                </p>
              </OrderInfo>
            </div>
          </BoxInfo>
        </ContentInfo>

        <SuccessIllustrationSVG />
      </SuccessContainer>
    </Container>
  )
}
