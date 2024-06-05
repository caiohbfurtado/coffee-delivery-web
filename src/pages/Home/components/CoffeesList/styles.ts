import styled, { css } from 'styled-components'

export const CoffeesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;

  ${({ theme }) => css`
    > h2 {
      font-weight: 800;
      color: ${theme.colors.base.subtitle};
      font-size: ${theme.fontSizes.title.l};
      font-family: ${theme.fontFamily.title};
    }
  `}
`

export const CoffeesListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 2rem;
  margin-top: 3.375rem;
  justify-content: space-evenly;
`
