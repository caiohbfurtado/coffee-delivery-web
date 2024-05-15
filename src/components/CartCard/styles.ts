import styled, { css } from 'styled-components'

export const CartCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
  `}
`

export const CartCardContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  ${({ theme }) => css`
    span {
      font-size: ${theme.fontSizes.text.m};
      color: ${theme.colors.base.subtitle};
    }
  `}
`

export const PriceText = styled.span`
  font-weight: bold;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.text.m};
    color: ${theme.colors.base.text};
  `}
`
