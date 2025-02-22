// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SectionFullWidthThreshold, SideMenuStickyThreshold } from 'consts';
import { useUi } from 'contexts/UI';
import { GraphWrapper } from 'library/Graphs/Wrappers';
import { PageTitle } from 'library/PageTitle';
import { useTranslation } from 'react-i18next';
import {
  PageRowWrapper,
  RowPrimaryWrapper,
  RowSecondaryWrapper,
  TopBarWrapper,
} from 'Wrappers';
import { ActiveAccount } from './ActiveAccount';
import BalanceGraph from './BalanceGraph';
import { NetworkStats } from './NetworkSats';
import Payouts from './Payouts';
import PayoutsErrorBoundary from './PayoutsErrorBoundary';
import Reserve from './Reserve';
import { Tips } from './Tips';

export const Overview = () => {
  const { services } = useUi();
  const { t } = useTranslation('pages');

  const PAYOUTS_HEIGHT = 410;
  const BALANCE_HEIGHT = PAYOUTS_HEIGHT;

  return (
    <>
      <PageTitle title={t('overview.overview')} />
      <PageRowWrapper className="page-padding" noVerticalSpacer>
        <TopBarWrapper>
          <ActiveAccount />
        </TopBarWrapper>
      </PageRowWrapper>
      {services.includes('tips') && (
        <PageRowWrapper className="page-padding" noVerticalSpacer>
          <Tips />
        </PageRowWrapper>
      )}
      <PageRowWrapper className="page-padding" noVerticalSpacer>
        <RowSecondaryWrapper
          hOrder={0}
          vOrder={0}
          thresholdStickyMenu={SideMenuStickyThreshold}
          thresholdFullWidth={SectionFullWidthThreshold}
        >
          <GraphWrapper style={{ minHeight: BALANCE_HEIGHT }} flex>
            <BalanceGraph />
            <Reserve />
          </GraphWrapper>
        </RowSecondaryWrapper>
        <RowPrimaryWrapper
          hOrder={1}
          vOrder={1}
          thresholdStickyMenu={SideMenuStickyThreshold}
          thresholdFullWidth={SectionFullWidthThreshold}
        >
          <GraphWrapper style={{ minHeight: PAYOUTS_HEIGHT }} flex>
            <PayoutsErrorBoundary>
              <Payouts />
            </PayoutsErrorBoundary>
          </GraphWrapper>
        </RowPrimaryWrapper>
      </PageRowWrapper>
      <PageRowWrapper className="page-padding" noVerticalSpacer>
        <NetworkStats />
      </PageRowWrapper>
    </>
  );
};

export default Overview;
