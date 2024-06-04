import styled, { css } from 'styled-components'

type SectionCartContainerProps = {
  width?: number
}

export const CartContainer = styled.form`
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

export const EmptyContainer = styled.div`
  display: flex;
  margin-top: 9rem;
  font-weight: bold;

  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.title.s};

    a {
      color: ${theme.colors.branding['purple-medium']};
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${theme.colors.branding['purple-dark']};
      }
    }
  `}
`

export const ErrorContainer = styled.div`
  height: 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    p {
      font-size: ${theme.fontSizes.text.s};
      color: red;
      font-weight: bold;
    }
  `}
`
