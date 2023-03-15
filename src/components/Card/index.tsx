import styled from 'styled-components'
import { Box } from '@ebitempuraswap/ebitempura-swap-uikit'

const Card = styled(Box)<{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.2)' : '#C2BD44')};
  background-color: ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.1)' : '#FFFEE7')};
  border-radius: 9px;
`

export const LightGreyCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.dropdown};
`
