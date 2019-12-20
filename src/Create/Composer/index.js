import React, { useContext } from 'react';
import ComposerWrapper from './ComposerWrapper';
import ActiveChoice from './ActiveChoice';

import { PlayerContext } from '../../Context';

export default () => {
  const ctx = useContext(PlayerContext);
  return (
    ctx.isComposing && <ComposerWrapper><ActiveChoice /></ComposerWrapper>
  );
};
