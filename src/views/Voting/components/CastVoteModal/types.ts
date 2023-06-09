import { InjectedModalProps } from '@ebitempuraswap/ebitempura-swap-uikit'

export enum ConfirmVoteView {
  MAIN = 'main',
  DETAILS = 'details',
}

export interface CastVoteModalProps extends InjectedModalProps {
  onSuccess: () => Promise<void>
  proposalId: string
  vote: {
    label: string
    value: number
  }
  block?: number
}
