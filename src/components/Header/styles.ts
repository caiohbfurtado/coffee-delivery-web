import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.base.background};
  position: fixed;
  top: 0;
  display: flex;
  z-index: 999;
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

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`
