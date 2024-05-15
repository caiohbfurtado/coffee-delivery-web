import styled, { css } from 'styled-components'

export const InputText = styled.input`
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  border: none;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.input};
    color: ${theme.colors.base.text};

    &::placeholder {
      color: ${theme.colors.base.label};
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${(props) => props.theme.colors.branding['yellow-dark']};
    }
  `}
`
