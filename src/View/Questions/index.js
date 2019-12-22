import React, { useContext } from 'react';
import Identification from './Identification';
import Choices from './Choices';
import Wrapper from '../../Components/Wrapper';
import { PlayerContext } from '../../Context';


export default () => {
  const { prompt, question } = useContext(PlayerContext);
  if (prompt) {
    return (
      <Wrapper>
        { question.type === 'multiple choice'
          ? <Choices />
          : <Identification />}
      </Wrapper>
    );
  }
  return null;
};
