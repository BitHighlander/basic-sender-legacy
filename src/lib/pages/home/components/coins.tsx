import { getPaths } from '@pioneer-platform/pioneer-coins';

export const paths = getPaths();

export const COIN_MAP_LONG: any = {
  BTC: "bitcoin",
  ATOM: "cosmos",
  OSMO: "osmosis",
  // BTCT: "testnet",
  BCH: "bitcoincash",
  LTC: "litecoin",
  DASH: "dash",
  DGB: "digiByte",
  DOGE: "dogecoin",
  RUNE: "thorchain",
  ETH: "ethereum",
  // AVAX: "avalanche",
  // ADA: "cardano",
  BNB: "binance",
  // EOS: "eos",
  // FIO: "fio",
};

export const COIN_ICONS_BY_SYMBOL: any = {
  BTC: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
  ETH: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  DASH: "https://pioneers.dev/coins/dash.png",
  DOGE: "https://pioneers.dev/coins/dogecoin.png",
  DGB: "https://pioneers.dev/coins/digibyte.png",
  LTC: "https://pioneers.dev/coins/litecoin.png",
  BNB: "https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615",
  BCH: "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png?1594689492",
  OSMO: "https://assets.coingecko.com/coins/images/16724/thumb/osmo.png",
  ATOM: "https://pioneers.dev/coins/cosmos.png",
  FIO: "https://assets.coingecko.com/coins/images/16724/thumb/fio.png",
  EOS: "https://assets.coingecko.com/coins/images/16724/thumb/eos.png",
  RUNE: "https://assets.coingecko.com/coins/images/6595/thumb/RUNE.png",
  ADA: "https://assets.coingecko.com/coins/images/16724/thumb/ada.png",
  LUNA: "https://assets.coingecko.com/coins/images/8284/thumb/luna1557227471663.png?1567147072",
  KAVA: "https://assets.coingecko.com/coins/images/16724/thumb/kava.png",
  SCRT: "https://assets.coingecko.com/coins/images/16724/thumb/scrt.png",
};

export const BASIC_ASSETS: any = [];
for (let i = 0; i < Object.keys(COIN_MAP_LONG).length; i++) {
  const symbol = Object.keys(COIN_MAP_LONG)[i];
  console.log("paths: ", paths);
  const asset = {
    symbol,
    // @ts-ignore
    name: COIN_MAP_LONG[symbol],
    // @ts-ignore
    icon: COIN_ICONS_BY_SYMBOL[symbol],
  };
  BASIC_ASSETS.push(asset);
}
console.log("BASIC_ASSETS: ", BASIC_ASSETS)
