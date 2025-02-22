// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonPrimary } from '@rossbulat/polkadot-dashboard-ui';
import { useBalances } from 'contexts/Balances';
import { useConnect } from 'contexts/Connect';
import { useModal } from 'contexts/Modal';
import { useActivePools } from 'contexts/Pools/ActivePools';
import { PoolState } from 'contexts/Pools/types';
import { useStaking } from 'contexts/Staking';
import { useUi } from 'contexts/UI';
import { useValidators } from 'contexts/Validators';
import { CardHeaderWrapper } from 'library/Graphs/Wrappers';
import { OpenHelpIcon } from 'library/OpenHelpIcon';
import { ValidatorList } from 'library/ValidatorList';
import { useTranslation } from 'react-i18next';
import { MaybeAccount } from 'types';
import { Wrapper } from './Wrapper';

export const Nominations = ({
  bondType,
  nominator,
}: {
  bondType: 'pool' | 'stake';
  nominator: MaybeAccount;
}) => {
  const { openModalWith } = useModal();
  const { inSetup } = useStaking();
  const { isSyncing } = useUi();
  const { activeAccount, isReadOnlyAccount } = useConnect();
  const { getAccountNominations } = useBalances();
  const { nominated: stakeNominated, poolNominated } = useValidators();
  const { t } = useTranslation('pages');
  let { favoritesList } = useValidators();
  if (favoritesList === null) {
    favoritesList = [];
  }

  const {
    poolNominations,
    isNominator: isPoolNominator,
    isOwner: isPoolOwner,
    selectedActivePool,
  } = useActivePools();

  const isPool = bondType === 'pool';
  const nominations = isPool
    ? poolNominations.targets
    : getAccountNominations(nominator);
  const nominated = isPool ? poolNominated : stakeNominated;
  const batchKey = isPool ? 'pool_nominations' : 'stake_nominations';

  const nominating = nominated?.length ?? false;

  // determine whether buttons are disabled
  const poolDestroying =
    isPool &&
    selectedActivePool?.bondedPool?.state === PoolState.Destroy &&
    !nominating;

  const stopBtnDisabled =
    (!isPool && inSetup()) ||
    isSyncing ||
    isReadOnlyAccount(activeAccount) ||
    poolDestroying;

  return (
    <Wrapper>
      <CardHeaderWrapper withAction>
        <h3>
          {isPool ? t('nominate.pool_nominations') : t('nominate.nominations')}
          <OpenHelpIcon helpKey="Nominations" />
        </h3>
        <div>
          {/* If regular staking and nominating, display stop button.
              If Pool and account is nominator or root, display stop button.
          */}
          {((!isPool && nominations.length) ||
            (isPool && (isPoolNominator() || isPoolOwner()))) && (
            <ButtonPrimary
              iconLeft={faStopCircle}
              iconTransform="grow-1"
              text={t('nominate.stop')}
              disabled={stopBtnDisabled}
              onClick={() =>
                openModalWith(
                  'ChangeNominations',
                  {
                    nominations: [],
                    bondType,
                  },
                  'small'
                )
              }
            />
          )}
        </div>
      </CardHeaderWrapper>
      {nominated === null || isSyncing ? (
        <div className="head">
          <h4>
            {!isSyncing && nominated === null
              ? t('nominate.not_nominating')
              : t('nominate.syncing')}
          </h4>
        </div>
      ) : !nominator ? (
        <div className="head">
          <h4>{t('nominate.not_nominating')}</h4>
        </div>
      ) : (
        <>
          {nominated.length > 0 ? (
            <div style={{ marginTop: '1rem' }}>
              <ValidatorList
                bondType={isPool ? 'pool' : 'stake'}
                validators={nominated}
                nominator={nominator}
                batchKey={batchKey}
                title={t('nominate.your_nominations')}
                format="nomination"
                selectable={false}
                refetchOnListUpdate
                allowMoreCols
                disableThrottle
              />
            </div>
          ) : (
            <div className="head">
              {poolDestroying ? (
                <h4>{t('nominate.pool_destroy')}</h4>
              ) : (
                <h4>{t('nominate.not_nominating')}</h4>
              )}
            </div>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Nominations;
