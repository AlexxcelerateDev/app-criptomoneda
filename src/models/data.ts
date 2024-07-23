export interface rootObject {
  data: coin[];
  timestamp: number;
}

export interface coin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: null | string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: null | string;
}
