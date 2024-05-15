import styled, { css } from 'styled-components'

export const InputNumberContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
  `}
`

export const InputNumberButton = styled.button`
  background-color: transparent;
  padding: 0.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => css`
    color: ${theme.colors.branding['purple-medium']};

    &:hover {
      color: ${theme.colors.branding['purple-dark']};
    }

    &:disabled {
      color: ${theme.colors.base.hover};
    }
  `}
`

export const TextInputNumber = styled.input`
  background-color: transparent;
  border: none;
  width: 1.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
