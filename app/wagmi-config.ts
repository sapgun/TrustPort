import { createConfig, http } from 'wagmi';
import { mainnet, polygon, avalanche, arbitrum, base } from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, avalanche, arbitrum, base],
  transports: {
    [mainnet.id]: http(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
    [polygon.id]: http('https://polygon-rpc.com'),
    [avalanche.id]: http('https://api.avax.network/ext/bc/C/rpc'),
    [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    [base.id]: http('https://mainnet.base.org'),
  },
});