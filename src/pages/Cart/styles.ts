import styled, { css } from 'styled-components'

type SectionCartContainerProps = {
  width?: number
}

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  margin: 9rem 0;
`

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;

  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.fontSizes.title.xs};
    font-family: ${theme.fontFamily.title};
  `}
`

export const SectionCartContainer = styled.div<SectionCartContainerProps>`
  display: flex;
  flex-direction: column;
`
