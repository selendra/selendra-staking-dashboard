// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  buttonPrimaryBackground,
  backgroundToggle,
  textPrimary,
  textInvert,
  textSecondary,
  textDanger,
  borderPrimary,
  modalBackground,
  textSuccess,
  borderSecondary,
} from 'theme';

export const CardsWrapper = styled(motion.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;

  h1 {
    padding: 0 0.5rem;
  }

  h2 {
    color: ${textPrimary};
    border-bottom: 1px solid ${borderPrimary};
    padding-bottom: 0.75rem;
    margin: 2rem 0 1rem 0;
  }

  h3 {
    margin: 1rem 0;
  }

  .head {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0.5rem 0 1.5rem 0;

    > div:last-child {
      display: flex;
      flex-flow: row-reverse wrap;
      flex-grow: 1;

      button {
        background: none;
        opacity: 0.85;
      }
    }
  }
`;

export const PaddingWrapper = styled.div`
  box-sizing: border-box;
  padding: 1rem 0 0.5rem 0rem;
  height: auto;
`;

export const AccountGroupWrapper = styled(motion.button)`
  box-sizing: border-box;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background: ${buttonPrimaryBackground};
  margin-bottom: 1rem;
  transition: background 0.15s;

  > section {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    flex-basis: 100%;

    @media (min-width: 800px) {
      flex-basis: 50%;

      &:first-child {
        padding-right: 0.25rem;
      }
      &:last-child {
        padding-left: 0.25rem;
      }
    }

    > h5 {
      margin: 0 0 0.25rem 0;
      opacity: 0.75;
    }

    > div {
      > button,
      > div {
        border-radius: 0.75rem;
        border: 1px solid ${modalBackground};
        margin: 0;
      }
    }
  }

  &:hover {
    background: ${backgroundToggle};
    > section > div {
      > button,
      > div {
        background: ${backgroundToggle};
      }
    }
  }
`;

export const AccountWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  > button {
    &:hover {
      background: ${backgroundToggle};
    }
    &:disabled {
      cursor: default;
      border: 2px solid rgba(242, 185, 27, 0.25);
    }
  }

  > div,
  button {
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.75rem;
    font-size: 1rem;
    background: ${buttonPrimaryBackground};
    transition: background 0.15s;
    color: ${textPrimary};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 3.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0.25rem;

      &:first-child {
        flex-shrink: 1;
        overflow: hidden;
        .name {
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      &:last-child {
        flex-grow: 1;
        justify-content: flex-end;
      }

      &.neutral {
        h5 {
          color: ${textSecondary};
          opacity: 0.75;
        }
      }
      &.danger {
        h5 {
          color: ${textDanger};
        }
      }
      .icon {
        width: 1rem;
        height: 1rem;
        margin-left: 0.75rem;
      }

      /* svg theming */
      svg {
        .light {
          fill: ${textInvert};
        }
        .dark {
          fill: ${textSecondary};
        }
      }
    }
  }
`;

export const ExtensionWrapper = styled.div<any>`
  box-sizing: border-box;
  width: 100%;

  > button,
  > div {
    box-sizing: border-box;
    width: 100%;
    margin: ${(props) => (props.noSpacing ? 0 : '1rem 0')};
    padding: ${(props) => (props.noSpacing ? 0 : '1rem 0.75rem')};
    font-size: 1rem;
    background: ${buttonPrimaryBackground};
    border-radius: 0.75rem;
    transition: background 0.15s;
    color: ${textPrimary};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 3.5rem;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 1rem;
      h3 {
        margin: 0;
      }
      span {
        margin-right: 1.25rem;
        &.name {
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &.message {
          opacity: 0.75;
        }
      }
      &:first-child {
        flex-shrink: 1;
        overflow: hidden;
      }
      &:last-child {
        flex-grow: 1;
        justify-content: flex-end;
        .icon {
          margin-left: 1rem;
        }
      }
    }
    .neutral {
      color: ${textSecondary};
      opacity: 0.8;
    }
    .danger {
      color: ${textDanger};
    }
    .success {
      color: ${textSuccess};
    }
    /* svg theming */
    svg {
      .light {
        fill: ${textInvert};
      }
      .dark {
        fill: ${textSecondary};
      }
    }
  }
  > button {
    &:hover {
      background: ${backgroundToggle};
    }

    &:disabled {
      cursor: default;
      opacity: 1;
      &:hover {
        background: ${buttonPrimaryBackground};
      }
    }
  }
`;

export const Separator = styled.div`
  border-top: 1px solid ${textSecondary};
  width: 100%;
  opacity: 0.1;
  margin: 1.5rem 0rem;
`;

export const ReadOnlyWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 0.75rem;
  width: 100%;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: ${buttonPrimaryBackground};
  transition: background 0.15s;
  color: ${textPrimary};
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  min-height: 3.5rem;

  > .content {
    box-sizing: border-box;
    padding: 0 1rem;
    width: 100%;
  }

  .accounts {
    margin-top: 1rem;
    width: 100%;
  }

  .account {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${borderPrimary};
    border-radius: 0.75rem;
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    transition: border 0.1s;

    > div {
      color: ${textSecondary};
      transition: opacity 0.2s;

      &:first-child {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:last-child {
        padding-left: 2rem;
        opacity: 0.25;
      }
    }

    &:hover {
      > div:last-child {
        opacity: 1;
      }
    }

    &:hover {
      border-color: ${borderSecondary};
    }
  }
`;
