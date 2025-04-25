// src/slices/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import btcIcon from '../assets/btc.png';
import ethIcon from '../assets/eth.png';
import usdtIcon from '../assets/usdt.png';
import xrpIcon from '../assets/xrp.png';
import bnbIcon from '../assets/bnb.png';
import solIcon from '../assets/sol.png';

import btcChart from '../assets/btc_chart.png';
import ethChart from '../assets/eth_chart.png';
import usdtChart from '../assets/usdt_chart.png';
import xrpChart from '../assets/xrp_chart.png';
import bnbChart from '../assets/bnb_chart.png';
import solChart from '../assets/sol_chart.png';


const initialState = {
  assets: [
    { id: 1, name: 'Bitcoin',   symbol: 'BTC', logo: btcIcon, price: 93759.48, percent1h: 0.43, percent24h: 0.93, percent7d: 11.11, marketCap: 1861618902186, volume24h: 43874950947, circulatingSupply: '19.85M BTC', maxSupply: '21M BTC', chart: btcChart },
    { id: 2, name: 'Ethereum',  symbol: 'ETH', logo: ethIcon, price: 1802.46,  percent1h: 0.60, percent24h: 3.21, percent7d: 13.68, marketCap: 217581279327,  volume24h: 23547469307, circulatingSupply: '120.71M ETH', maxSupply: 'No Max',   chart: ethChart },
    { id: 3, name: 'Tether',    symbol: 'USDT',logo: usdtIcon, price: 1.00,    percent1h: 0.00, percent24h: 0.00, percent7d: 0.04, marketCap: 145320022085, volume24h: 92288882007, circulatingSupply: '145.27B USDT', maxSupply: 'Unlimited', chart: usdtChart },
    { id: 4, name: 'XRP',       symbol: 'XRP', logo: xrpIcon, price: 2.22,    percent1h: 0.46, percent24h: 0.54, percent7d: 6.18,  marketCap: 130073814966, volume24h: 5131481491,  circulatingSupply: '58.39B XRP',  maxSupply: '100B XRP', chart: xrpChart },
    { id: 5, name: 'BNB',       symbol: 'BNB', logo: bnbIcon, price: 606.65,  percent1h: 0.09, percent24h: -1.20,percent7d: 3.73,  marketCap: 85471956947,  volume24h: 1874281784,  circulatingSupply: '140.89M BNB', maxSupply: '200M BNB', chart: bnbChart },
    { id: 6, name: 'Solana',    symbol: 'SOL', logo: solIcon, price: 151.51,  percent1h: 0.53, percent24h: 1.26, percent7d: 14.74, marketCap: 78381958631,  volume24h: 4881674486,  circulatingSupply: '517.31M SOL', maxSupply: 'No Max',    chart: solChart },
  ]
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    simulateUpdates: (state) => {
      state.assets.forEach(asset => {
        const rand = () => (Math.random() - 0.5) * 2;
        asset.price        += asset.price * rand() * 0.01;
        asset.percent1h    += rand() * 0.1;
        asset.percent24h   += rand() * 0.5;
        asset.percent7d    += rand() * 2;
        asset.volume24h    += asset.volume24h * rand() * 0.02;
      });
    },
  },
});

export const { simulateUpdates } = cryptoSlice.actions;
export default cryptoSlice.reducer;
