import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin: 0 auto;
`

export const CityInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.branding['purple-light']};
    color: ${theme.colors.branding['purple-dark']};

    span {
      font-size: ${theme.fontSizes.text.s};
    }

    svg {
      color: ${theme.colors.branding['purple-medium']};
    }
  `}
`

export const CartInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`
