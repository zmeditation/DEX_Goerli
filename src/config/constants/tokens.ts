import { ChainId, Token } from '@ebit/ebit-swap-sdk'

export const COLA: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x04d8aA2e6EAa7BC8e26F415c2DB9DEF941A52Fe5', 18, 'EBIT', 'EBIT Token'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xB82Bb2f3A6F149f330bceAB1610213A22e5593b0', 18, 'EBIT', 'EBIT Token'),
}

export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x1C8bD56542FBC1DF5d3b2a544Bd75b47e5CE632b',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '0x1C8bD56542FBC1DF5d3b2a544Bd75b47e5CE632b',
    },
    decimals: 18,
    projectLink: 'https://matchaswap.zilionixx.com/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '0x81b79CeE999483a081cf85190bEFcd51A7f1A8e1',
    },
    decimals: 18,
    projectLink: 'https://matchaswap.zilionixx.com/',
  },
  cola: {
    symbol: 'EBIT',
    address: {
      56: '0x04d8aA2e6EAa7BC8e26F415c2DB9DEF941A52Fe5',
      97: '0xB82Bb2f3A6F149f330bceAB1610213A22e5593b0',
    },
    decimals: 18,
    projectLink: 'https://matchaswap.zilionixx.com/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      56: '0x9A6583ed37D86d4aECCd691bEc13470392533182',
      97: '0x6cbcCca6E7355E6ee5a7cf34caAB339bFe72801A',
    },
    decimals: 18,
    projectLink: 'https://matchaswap.zilionixx.com/',
  },
  wbnb: {
    symbol: 'WBNB',
    address: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '0x04a28CDF8b37F0bF317B6f319E36aD0642B1521d',
    },
    decimals: 18,
    projectLink: 'https://matchaswap.zilionixx.com/',
  },
}

export default tokens
