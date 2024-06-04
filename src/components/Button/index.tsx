/* eslint-disable prettier/prettier */
import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'
import { Icon, IconContext, IconWeight } from 'phosphor-react'
import { useTheme } from 'styled-components'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ({
  variant?: 'primary'
  title: string
  icon?: never
  iconWeight?: never
}
  | {
    variant: 'secondary'
    title: string
    icon?: Icon
    iconWeight?: IconWeight
  } |
{
  variant: 'icon'
  title?: never
  icon: Icon
  iconWeight?: IconWeight
})

export function Button({ title, variant = 'primary', icon: Icon, iconWeight, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <ButtonContainer $variant={variant} {...rest}>
      {
        variant !== 'primary' && Icon && (
          <IconContext.Provider value={{
            color: variant === 'secondary' ? colors.branding['purple-medium'] : colors.base.white,
            size: variant === 'secondary' ? 16 : 22,
            weight: iconWeight ?? 'regular'
          }}>
            <Icon />
          </IconContext.Provider>
        )}
      {title}
    </ButtonContainer>
  )
}
