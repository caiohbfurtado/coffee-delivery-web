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

export function Success() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />
                  Farrapos - Porto Alegre, RS
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
                  <span>Cartão de Crédito</span>
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
