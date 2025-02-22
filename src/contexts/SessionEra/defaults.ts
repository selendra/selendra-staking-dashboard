// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SessionEra, SessionEraContextInterface } from './types';

export const sessionEra: SessionEra = {
  eraLength: 0,
  eraProgress: 0,
  sessionLength: 0,
  sessionProgress: 0,
  sessionsPerEra: 0,
};

export const defaultSessionEraContext: SessionEraContextInterface = {
  getEraTimeLeft: () => 0,
  eraTimeLeft: 0,
  sessionEra,
};
