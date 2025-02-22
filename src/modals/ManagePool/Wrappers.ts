// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { backgroundToggle, buttonPrimaryBackground, textPrimary } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
`;

export const FixedContentWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
`;

export const CardsWrapper = styled(motion.div)`
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`;

export const ContentWrapper = styled.div`
  border-radius: 0.2rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  min-width: 50%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
  flex-grow: 1;

  .items {
    position: relative;
    padding: 0.5rem 0 1.5rem 0;
    border-bottom: none;
    width: auto;
    border-radius: 0.75rem;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1;
    width: 100%;

    h4 {
      margin: 0.2rem 0;
    }
    h2 {
      margin: 0.75rem 0;
    }

    .action-button {
      background: ${buttonPrimaryBackground};
      padding: 1rem;
      cursor: pointer;
      margin-bottom: 1rem;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      transition: all 0.15s;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      h3,
      p {
        text-align: left;
        margin: 0;
      }
      h3 {
        margin-bottom: 0.5rem;
      }
      > *:last-child {
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }
      &:hover {
        background: ${backgroundToggle};
      }
      .icon {
        margin-right: 0.5rem;
      }
      p {
        color: ${textPrimary};
        font-size: 1rem;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }
`;
