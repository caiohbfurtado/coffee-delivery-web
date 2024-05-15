/* eslint-disable prettier/prettier */
import styled, { StyledObject, css } from 'styled-components'
import { ThemeType } from '../../@types/styles'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'icon'
}

interface ThemedButtonStyledProps {
  theme: ThemeType
  variant: 'primary' | 'secondary' | 'icon'
}

const getStylesBasedInVariant = ({
  variant,
  theme,
}: ThemedButtonStyledProps): StyledObject => {
  if (variant === 'secondary') {
    return {
      padding: '0.375rem 0.5rem',
      color: theme.colors.base.text,
      backgroundColor: theme.colors.base.button,
      fontSize: theme.fontSizes.button.m,
      fontWeight: 400,
    }
  }

  if (variant === 'icon') {
    return {
      padding: '0.5rem',
      color: theme.colors.base.white,
      backgroundColor: theme.colors.branding['purple-dark']
    }
  }

  return {
    padding: '0.75rem 3rem',
    color: theme.colors.base.white,
    backgroundColor: theme.colors.branding['yellow-medium'],
    fontSize: theme.fontSizes.button.g,
  }
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  outline: none;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 160%;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  ${({ theme, variant }) => css`
    &:focus {
      box-shadow: 0 0 0 2px
        ${variant === 'primary'
      ? theme.colors.branding['yellow-dark']
      : variant === 'secondary'
        ? theme.colors.base.text
        : theme.colors.branding['purple-light']};
    }

    &:hover {
      background-color: ${variant === 'primary'
      ? theme.colors.branding['yellow-dark']
      : variant === 'secondary'
        ? theme.colors.base.hover
        : theme.colors.branding['purple-medium']};;
    }
  `}

  ${getStylesBasedInVariant};
`
