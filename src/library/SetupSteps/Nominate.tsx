// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useConnect } from 'contexts/Connect';
import { useUi } from 'contexts/UI';
import { Footer } from 'library/SetupSteps/Footer';
import { Header } from 'library/SetupSteps/Header';
import { MotionContainer } from 'library/SetupSteps/MotionContainer';
import { GenerateNominations } from '../GenerateNominations';
import { NominationsProps } from './types';

export const Nominate = (props: NominationsProps) => {
  const { batchKey, setupType, section } = props;

  const { activeAccount } = useConnect();
  const { getSetupProgress, setActiveAccountSetup } = useUi();
  const setup = getSetupProgress(setupType, activeAccount);

  const setterFn = () => {
    return getSetupProgress(setupType, activeAccount);
  };

  // handler for updating bond
  const handleSetupUpdate = (value: any) => {
    setActiveAccountSetup(setupType, value);
  };

  return (
    <>
      <Header
        thisSection={section}
        complete={setup.nominations.length > 0}
        title="Nominate"
        helpKey="Nominating"
        setupType={setupType}
      />
      <MotionContainer thisSection={section} activeSection={setup.section}>
        <div style={{ marginTop: '0.5rem' }}>
          <h4>Choose a validator to nominate.</h4>
          <GenerateNominations
            stepsSetup
            batchKey={batchKey}
            setters={[
              {
                current: {
                  callable: true,
                  fn: setterFn,
                },
                set: handleSetupUpdate,
              },
            ]}
            nominations={setup.nominations}
          />
        </div>
        <Footer complete={setup.nominations.length > 0} setupType={setupType} />
      </MotionContainer>
    </>
  );
};
