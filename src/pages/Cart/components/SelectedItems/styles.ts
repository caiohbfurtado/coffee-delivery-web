import styled, { css } from 'styled-components'

export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  ${({ theme }) => css`
    padding: 2.5rem;
    background-color: ${theme.colors.base.card};
  `}
`

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
  `}
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`
export const SpacedBetweenInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const DetailedTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${({ theme }) => css`
    div {
      color: ${theme.colors.base.text};
      :first-child {
        font-size: ${theme.fontSizes.text.s};
      }
    }

    font-size: ${theme.fontSizes.text.m};
  `}
`

export const TotalInfo = styled.div`
  font-weight: bold;

  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.fontSizes.text.l};
  `}
`
