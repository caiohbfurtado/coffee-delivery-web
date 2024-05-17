import styled, { css } from 'styled-components'

type BoxContentDirection = {
  direction?: 'row' | 'column'
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Box = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
  `}
`

export const BoxHeader = styled.header`
  display: flex;
  gap: 0.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const HeaderTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.text.m};
    color: ${theme.colors.base.subtitle};
  `}
`

export const HeaderDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.text.s};
    color: ${theme.colors.base.text};
  `}
`

export const BoxContent = styled.div<BoxContentDirection>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  gap: 1rem;

  margin-top: 2rem;
`
