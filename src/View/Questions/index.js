import React, { useContext } from 'react';
import Identification from './Identification';
import Choices from './Choices';
import Wrapper from '../../Components/Wrapper';
import { PlayerContext } from '../../Context';


export default () => {
  const ctx = useContext(PlayerContext);
  if (ctx.prompt) {
    return (
      <Wrapper>
        { ctx.question.type === 'multiple choice'
          ? <Choices />
          : <Identification />}
      </Wrapper>
    );
  }
  return null;
};
