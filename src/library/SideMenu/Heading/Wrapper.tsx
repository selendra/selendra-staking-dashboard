// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { textSecondary } from 'theme';

export const Wrapper = styled.div<{ minimised: number }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) => (props.minimised ? 'center' : 'flex-start')};
  opacity: ${(props) => (props.minimised ? 0.5 : 1)};
  align-items: center;

  h5 {
    color: ${textSecondary};
    margin: 0.5rem 0; /* Overrides the global h5 style */
    padding: 0 0.5rem;
    opacity: 0.7;
  }
`;
