import { CartInfo, CityInfo, Content, HeaderContainer } from './styles'

import { CartButton } from '../CartButton'
import { LogoSVG } from '../svgs/LogoSVG'
import { MapPin } from 'phosphor-react'
import { Container } from '../Container'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Content>
          <LogoSVG />

          <CartInfo>
            <CityInfo>
              <MapPin weight="fill" size={22} />
              <span>Porto Alegre, RS</span>
            </CityInfo>

            <CartButton />
          </CartInfo>
        </Content>
      </Container>
    </HeaderContainer>
  )
}
