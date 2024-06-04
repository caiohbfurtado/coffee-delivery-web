import styled, { css } from 'styled-components'

type InputTextProps = {
  $required?: string
}

export const Input = styled.input<InputTextProps>`
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  border: none;

  ${({ theme, $required }) => css`
    background-color: ${theme.colors.base.input};
    color: ${theme.colors.base.text};

    border: 1px solid ${$required ? 'red' : 'transparent'};

    &::placeholder {
      color: ${theme.colors.base.label};
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${(props) => props.theme.colors.branding['yellow-dark']};
    }
  `}
`
