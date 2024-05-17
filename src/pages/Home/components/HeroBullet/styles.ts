import styled, { css } from 'styled-components'

type IconCOntainerProps = {
  color: string
}

export const HeroBulletContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${({ theme }) => css`
    p {
      font-size: ${theme.fontSizes.text.m};
    }
  `}
`

export const IconContainer = styled.div<IconCOntainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, color }) => css`
    background-color: ${color};

    svg {
      color: ${theme.colors.base.white};
    }
  `}
`
