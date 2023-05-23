// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN, BN_MILLION } from '@polkadot/util';
import { DefaultParams } from 'consts';
import { ReactComponent as SelendraIconSVG } from 'img/sel_icon.svg';
// import { ReactComponent as SelendraInlineSVG } from 'img/sel_inline.svg';
// import { ReactComponent as SelendraLogoSVG } from 'img/sel_logo.svg';
import { Networks } from 'types';

/*
 * Network Configuration
 */
export const NETWORKS: Networks = {};

if (process.env.REACT_APP_DISABLE_MAINNET !== '1') {
  NETWORKS.selendra = {
    name: 'Selendra Mainnet',
    endpoints: {
      rpc: 'wss://rpc0.selendra.org',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'SEL',
    units: 18,
    ss58: 204,
    brand: {
      icon: SelendraIconSVG,
      logo: {
        svg: SelendraIconSVG,
        width: '8.5rem',
      },
      inline: {
        svg: SelendraIconSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'SEL',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}

if (process.env.REACT_APP_DISABLE_TESTNET !== '1') {
  NETWORKS.selendratestnet = {
    name: 'Selendra Testnet',
    endpoints: {
      rpc: 'wss://rpc0-testnet.selendra.org',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#004766',
        dark: '#004766',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#004766',
        dark: '#004766',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'TSEL',
    units: 18,
    ss58: 204,
    brand: {
      icon: SelendraIconSVG,
      logo: {
        svg: SelendraIconSVG,
        width: '8.5rem',
      },
      inline: {
        svg: SelendraIconSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'TSEL',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}

if (process.env.REACT_APP_ENABLE_CUSTOM_NETWORK === '1') {
  NETWORKS.selendracustom = {
    name: 'Selendra Custom',
    endpoints: {
      rpc: process.env.REACT_APP_CUSTOM_WS_ADDRESS ?? '',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'CSEL',
    units: 12,
    ss58: 42,
    brand: {
      icon: SelendraIconSVG,
      logo: {
        svg: SelendraIconSVG,
        width: '8.5rem',
      },
      inline: {
        svg: SelendraIconSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'CSEL',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  NETWORKS.selendralocal = {
    name: 'Selendra Local',
    endpoints: {
      rpc: 'ws://localhost:9944',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'LSEL',
    units: 12,
    ss58: 42,
    brand: {
      icon: SelendraIconSVG,
      logo: {
        svg: SelendraIconSVG,
        width: '8.5rem',
      },
      inline: {
        svg: SelendraIconSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'LSEL',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
  NETWORKS.selendradevnet = {
    name: 'Selendra Devnet',
    endpoints: {
      rpc: 'wss://rpc-dev.selendra.org',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#1d78f0',
        dark: '#1d78f0',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'DSEL',
    units: 18,
    ss58: 204,
    brand: {
      icon: SelendraIconSVG,
      logo: {
        svg: SelendraIconSVG,
        width: '8.5rem',
      },
      inline: {
        svg: SelendraIconSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'DSEL',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}
