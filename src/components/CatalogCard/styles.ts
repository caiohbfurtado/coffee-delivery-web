import styled, { css } from 'styled-components'

export const CatalogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  width: 16rem;
  padding: 1.25rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
  `}
`

export const CatalogCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2.5rem;
  gap: 0.75rem;
`

export const CatalogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-top: 1rem;

  ${({ theme }) => css`
    h2 {
      font-family: ${theme.fontFamily.title};
      font-size: ${theme.fontSizes.title.s};
      color: ${theme.colors.base.subtitle};
      font-weight: bold;
    }

    p {
      font-size: ${theme.fontSizes.text.s};
      color: ${theme.colors.base.label};
    }
  `}
`

export const CatalogCardFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

export const Badge = styled.span`
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 9999px;

  ${({ theme }) => css`
    background-color: ${theme.colors.branding['yellow-light']};
    color: ${theme.colors.branding['yellow-dark']};
    font-size: ${theme.fontSizes.tag};
  `}
`

export const ValueText = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.text.s};
    color: ${theme.colors.base.text};

    span {
      font-size: ${theme.fontSizes.title.m};
      color: ${theme.colors.base.text};
      font-family: ${theme.fontFamily.title};
      font-weight: 800;
    }
  `}
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
