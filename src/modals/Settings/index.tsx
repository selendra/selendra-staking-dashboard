// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useUi } from 'contexts/UI';
import { Title } from 'library/Modal/Title';
import { StatusButton } from 'library/StatusButton';
import { PaddingWrapper } from '../Wrappers';

export const Settings = () => {
  const { services, toggleService } = useUi();

  // fetch flag to disable fiat
  const DISABLE_FIAT = Number(process.env.REACT_APP_DISABLE_FIAT ?? 0);

  return (
    <>
      <Title title="Settings" />
      <PaddingWrapper>
        {!DISABLE_FIAT && (
          <StatusButton
            checked={services.includes('binance_spot')}
            label="Binance Spot API"
            onClick={() => {
              toggleService('binance_spot');
            }}
          />
        )}

        <h4>Toggle Features</h4>

        <StatusButton
          checked={services.includes('tips')}
          label="Dashboard Tips"
          onClick={() => {
            toggleService('tips');
          }}
        />
      </PaddingWrapper>
    </>
  );
};

export default Settings;
