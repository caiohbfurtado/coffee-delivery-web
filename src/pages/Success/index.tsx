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
import { Location, useLocation, useNavigate } from 'react-router-dom'
import { OrderFormData } from '../Cart'
import { useEffect } from 'react'

const PAYMENT_INFO = {
  credit_card: 'Cartão de Crédito',
  debit_card: 'Cartão de Débito',
  money: 'Dinheiro',
}

type PaymentDetailsProps = {
  paymentDetails: OrderFormData
}

export function Success() {
  const navigate = useNavigate()
  const location = useLocation()
  const { state }: Location<PaymentDetailsProps> = location

  useEffect(() => {
    if (!state) {
      return navigate('/')
    }
  }, [state, navigate])

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
                    {state?.paymentDetails.street},{' '}
                    {state?.paymentDetails.number}
                  </span>{' '}
                  <br />
                  {state?.paymentDetails.neighborhood} -{' '}
                  {state?.paymentDetails.city}, {state?.paymentDetails.state}
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
                  <span>{PAYMENT_INFO[state?.paymentDetails.payment]}</span>
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
