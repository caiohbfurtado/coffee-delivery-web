import { CartInfo, CityInfo, HeaderContainer } from './styles'

import { CartButton } from '../CartButton'
import { LogoSVG } from '../svgs/LogoSVG'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <LogoSVG />

      <CartInfo>
        <CityInfo>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </CityInfo>

        <CartButton />
      </CartInfo>
    </HeaderContainer>
  )
}
