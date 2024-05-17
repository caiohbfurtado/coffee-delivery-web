import styled, { css } from 'styled-components'

interface SelectContainerProps {
  checked: boolean
}

export const SelectContainer = styled.div`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  display: flex;
`

export const RadioInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  outline: none;
  z-index: 0;
`

export const SelectTitle = styled.label<SelectContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  line-height: 160%;
  flex: 1;
  padding: 1rem;
  z-index: 1;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ theme, checked }) => css`
    background-color: ${checked
      ? theme.colors.branding['purple-light']
      : theme.colors.base.button};
    border-color: ${checked
      ? theme.colors.branding['purple-medium']
      : 'transparent'};
    font-size: ${theme.fontSizes.button.m};
    color: ${theme.colors.base.text};

    &:hover {
      background-color: ${theme.colors.base.hover};
    }

    svg {
      color: ${theme.colors.branding['purple-medium']};
      margin-right: 0.75rem;
    }
  `}
`
