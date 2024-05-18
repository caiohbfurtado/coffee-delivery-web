import styled, { css } from 'styled-components'

type IconCOntainerProps = {
  color: string
}

export const SuccessContainer = styled.div`
  margin-top: 11.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  gap: 6.375rem;
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.fontFamily.title};
      font-size: ${theme.fontSizes.title.l};
      color: ${theme.colors.branding['yellow-dark']};
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.text.l};
      color: ${theme.colors.base.subtitle};
    `}
  }
`

export const BoxInfo = styled.div`
  width: 100%;
  border-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  padding: 1px;
  margin-top: 2.5rem;

  ${({ theme }) => css`
    background: linear-gradient(
      to bottom right,
      ${theme.colors.branding['yellow-medium']},
      ${theme.colors.branding['purple-medium']}
    );

    > div {
      border-radius: 6px;
      border-bottom-left-radius: 36px;
      border-top-right-radius: 36px;
      background-color: ${theme.colors.base.background};
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `}
`

export const OrderInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.fontSizes.text.m};

    span {
      font-weight: bold;
    }
  `}
`

export const IconContainer = styled.div<IconCOntainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, color }) => css`
    background-color: ${color};

    svg {
      color: ${theme.colors.base.white};
    }
  `}
`
