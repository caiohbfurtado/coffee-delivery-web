import styled, { css } from 'styled-components'

import backgroundImage from '../../../../assets/background.png'

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
`

export const ContentHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 3.5rem;
  padding: 6rem 0;

  img {
    flex: 1;
  }
`

export const ContentHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 36.75rem;

  ${({ theme }) => css`
    h1 {
      font-weight: 800;
      color: ${theme.colors.base.title};
      font-family: ${theme.fontFamily.title};
      font-size: ${theme.fontSizes.title.xl};
      margin-bottom: 1rem;
    }

    p {
      color: ${theme.colors.base.subtitle};
      font-size: ${theme.fontSizes.text.l};
    }
  `}
`

export const BulletInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.5rem;
  margin-top: 4rem;
`
