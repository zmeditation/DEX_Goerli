import React, { useState } from 'react'
import { Token } from '@ebit/ebit-swap-sdk'
import { ButtonMenu, ButtonMenuItem, ModalBody } from '@ebitempuraswap/ebitempura-swap-uikit'
// import styled from 'styled-components'
import { TokenList } from '@zilionixx/zilionixx-token-lists'
import { useTranslation } from 'contexts/Localization'
import ManageLists from './ManageLists'
import ManageTokens from './ManageTokens'
import { CurrencyModalView } from './types'

export default function Manage({
  setModalView,
  setImportList,
  setImportToken,
  setListUrl,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
  setImportList: (list: TokenList) => void
  setListUrl: (url: string) => void
}) {
  const [showLists, setShowLists] = useState(true)

  const { t } = useTranslation()

  return (
    <ModalBody>
      <ButtonMenu
        activeIndex={showLists ? 0 : 1}
        onItemClick={() => setShowLists((prev) => !prev)}
        scale="sm"
        variant="subtle"
        mb="32px"
      >
        <ButtonMenuItem width="50%">{t('Lists')}</ButtonMenuItem>
        <ButtonMenuItem width="50%">{t('Tokens')}</ButtonMenuItem>
      </ButtonMenu>
      {showLists ? (
        <ManageLists setModalView={setModalView} setImportList={setImportList} setListUrl={setListUrl} />
      ) : (
        <ManageTokens setModalView={setModalView} setImportToken={setImportToken} />
      )}
    </ModalBody>
  )
}
