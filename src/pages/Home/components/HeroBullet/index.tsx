import { Icon } from 'phosphor-react'
import { HeroBulletContainer, IconContainer } from './styles'

interface HeroBulletProps {
  text: string
  icon: Icon
  color: string
}

export function HeroBullet({ icon: Icon, text, color }: HeroBulletProps) {
  return (
    <HeroBulletContainer>
      <IconContainer color={color}>
        <Icon size={16} weight="fill" />
      </IconContainer>

      <p>{text}</p>
    </HeroBulletContainer>
  )
}
