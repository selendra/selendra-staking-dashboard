// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { stringToU8a } from '@polkadot/util';

/*
 * Global Constants
 */
export const AppVersion = '1.0.1';
export const UriPrefix = '/';
export const TitleDefault = 'Selendra Staking Dashboard';
export const DappName = 'Selendra Staking Dashboard';
export const PolkadotUrl = 'https://selendra.org/staking/';

/*
 * Data Structure Helpers
 */
export const EmptyH256 = new Uint8Array(32);
export const ModPrefix = stringToU8a('modl');
export const U32Opts = { bitLength: 32, isLe: true };

export const PayeeStatus = [
  {
    key: 'Staked',
    name: 'Restaking',
  },
  {
    key: 'Stash',
    name: 'To Stash Account',
  },
  {
    key: 'Controller',
    name: 'To Controller Account',
  },
];

export const InterfaceMaximumWidth = 1550;
export const SideMenuMaximisedWidth = '16rem';
export const SideMenuMinimisedWidth = '90px';
export const SideMenuStickyThreshold = 1175;
export const SectionFullWidthThreshold = 1050;
export const ShowAccountsButtonWidthThreshold = 850;
export const FloatingMenuWidth = 250;
export const SmallFontSizeMaxWidth = 600;
export const MediumFontSizeMaxWidth = 1600;
export const TipsThresholdSmall = 750;
export const TipsThresholdMedium = 1200;

/*
 * Toggle-able services
 */
export const ServiceList = ['binance_spot', 'tips'];

/*
 * Fallback config values
 */
export const FallbackMaxNominations = 16;
export const FallbackBondingDuration = 28;
export const FallbackSessionsPerEra = 6;
export const FallbackNominatorRewardedPerValidator = 256;
export const FallbackMaxElectingVoters = 22500;
export const FallbackExpectedBlockTime = 1000;
export const FallbackExpectedEraTime = 24 * 60 * 60 * 1000;

/*
 * Misc values
 */
export const ListItemsPerPage = 30;
export const ListItemsPerBatch = 15;
export const MinBondPrecision = 3;
export const MaxPayoutDays = 60;

/*
 * Third party API keys and endpoints
 */
export const EndpointPrice = 'https://api.binance.com/api/v3';
export const ApiEndpoints = {
  priceChange: `${EndpointPrice}/ticker/24hr?symbol=`,
};

/*
 * default network parameters
 */
export const DefaultParams = {
  auctionAdjust: 0,
  auctionMax: 0,
  falloff: 0.05,
  maxInflation: 0.1,
  minInflation: 0.025,
  stakeTarget: 0.5,
};

/*
 * locale
 */
export const DefaultLocale = 'en';
