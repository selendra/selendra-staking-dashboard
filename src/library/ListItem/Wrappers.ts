// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SmallFontSizeMaxWidth } from 'consts';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  backgroundDropdown,
  backgroundModalItem,
  borderPrimary,
  modalBackground,
  networkColor,
  radioBackground,
  radioBorder,
  shadowColorSecondary,
  textSecondary,
} from 'theme';

export const Wrapper = styled.div<{ format?: string; inModal?: boolean }>`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: ${(props) => (props.format === 'nomination' ? '6rem' : '3rem')};
  position: relative;
  margin: 0.5rem;

  > .inner {
    background: ${(props) =>
      props.inModal ? backgroundModalItem : backgroundDropdown};
    box-shadow: 0px 1.75px 0px 1.25px ${shadowColorSecondary};

    ${(props) =>
      props.inModal &&
      `
      box-shadow: none;
      border: none;`}
    flex: 1;
    border-radius: 0.2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0;
    .row {
      flex: 1 0 100%;
      height: 3.25rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0.5rem;

      &.status {
        height: 2.75rem;
      }
    }
  }
`;

export const Labels = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  flex: 1 1 100%;
  padding: 0 0 0 0.25rem;
  height: 2.75rem;

  button {
    padding: 0 0.1rem;
    @media (min-width: ${SmallFontSizeMaxWidth}px) {
      padding: 0 0.2rem;
    }

    color: ${textSecondary};
    &:hover {
      opacity: 0.75;
    }
    &.active {
      color: ${networkColor};
    }
    &:disabled {
      opacity: 0.35;
    }
  }

  .label {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: ${textSecondary};
    margin: 0 0.2rem;
    @media (min-width: ${SmallFontSizeMaxWidth}px) {
      margin: 0 0.2rem;
      &.pool {
        margin: 0 0.4rem;
      }
    }
    button {
      font-size: 1.1rem;
    }
    &.button-with-text {
      margin-right: 0;

      button {
        color: ${networkColor};
        font-size: 0.95rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        > svg {
          margin-left: 0.3rem;
        }
      }
    }

    &.warning {
      color: #d2545d;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      padding-right: 0.35rem;
    }
  }
`;

export const OverSubscribedWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 100%;

  .warning {
    margin-right: 0.25rem;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
export const IdentityWrapper = styled(motion.div)`
  display: flex;
  margin-right: 0.5rem;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  overflow: hidden;
  flex: 1 1 25%;
  position: relative;

  .inner {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3.25rem;
    padding: 0 0 0 0.2rem;
  }
  h4 {
    color: ${textSecondary};
    position: absolute;
    top: 0;
    width: 100%;
    height: 3.25rem;
    line-height: 3.25rem;
    padding: 0 0 0 0.3rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-variation-settings: 'wght' 600;
    font-size: 1rem;

    > span {
      color: ${textSecondary};
      opacity: 0.75;
      font-size: 0.88rem;
      margin-left: 0.35rem;
      position: relative;
      top: -0.1rem;
    }
  }
`;

export const ValidatorStatusWrapper = styled.div<{ status: string }>`
  margin-right: 0.35rem;
  padding: 0 0.5rem;

  h5 {
    color: ${(props) =>
      props.status === 'active' ? '#66d16f' : textSecondary};
    opacity: ${(props) => (props.status === 'active' ? 1 : 0.8)};
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SelectWrapper = styled.button`
  background: ${modalBackground};
  margin: 0 0.75rem 0 0.25rem;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border-radius: 0.25rem;
  width: 1.1rem;
  height: 1.1rem;
  padding: 0;
  * {
    cursor: pointer;
    width: 100%;
    padding: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  .select-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const SelectSingleWrapper = styled.button`
  background: ${radioBackground};
  margin: 0 0.75rem 0 0.25rem;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 1.1rem;
  height: 1.1rem;
  padding: 0;
  border-radius: 50%;
  border: 1px solid ${radioBorder};

  * {
    cursor: pointer;
    width: 100%;
    padding: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  .select-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${borderPrimary};
`;

export const MenuPosition = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const TooltipPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0.75rem;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const TooltipTrigger = styled.div`
  z-index: 1;
  width: 130%;
  height: 130%;
  position: absolute;
  top: -10%;
  left: -10%;

  &.as-button {
    cursor: pointer;
  }
`;

export default Wrapper;
