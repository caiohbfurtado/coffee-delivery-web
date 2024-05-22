import { Background, BulletInfo, ContentHero, ContentHeroInfo } from './styles'

import { Container } from '../../../../components/Container'

import heroImage from '../../../../assets/hero.png'
import { HeroBullet } from '../HeroBullet'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'

const bullets = [
  {
    icon: ShoppingCart,
    text: 'Compra simples e segura',
    color: defaultTheme.colors.branding['yellow-dark'],
  },
  {
    icon: Package,
    text: 'Mantém o café intacto',
    color: defaultTheme.colors.base.text,
  },
  {
    icon: Timer,
    text: 'Entrega rápida e rastreada',
    color: defaultTheme.colors.branding['yellow-medium'],
  },
  {
    icon: Coffee,
    text: 'O café chega fresquinho até você',
    color: defaultTheme.colors.branding['purple-medium'],
  },
]

export function Hero() {
  return (
    <Background>
      <Container>
        <ContentHero>
          <ContentHeroInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <BulletInfo>
              {bullets.map(({ icon, text, color }) => (
                <HeroBullet icon={icon} text={text} color={color} key={text} />
              ))}
            </BulletInfo>
          </ContentHeroInfo>

          <img src={heroImage} alt="Copo de café com grãos ao redor" />
        </ContentHero>
      </Container>
    </Background>
  )
}
