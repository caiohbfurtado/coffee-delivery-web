import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const CartButtonContainer = styled(Link)`
  border: none;
  outline: none;
  position: relative;
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.branding['yellow-light']};
    color: ${theme.colors.branding['yellow-dark']};

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.branding['yellow-dark']};
    }

    &:hover {
      background-color: ${theme.colors.branding['yellow-medium']};
      color: ${theme.colors.base.white};
    }
  `}
`

export const NumberOfItemsNotification = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  border-radius: 9999px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.branding['yellow-dark']};
    color: ${theme.colors.base.white};
    font-size: ${theme.fontSizes.text.s};
  `}
`
