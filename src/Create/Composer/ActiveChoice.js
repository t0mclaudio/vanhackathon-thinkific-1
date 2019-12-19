import React from 'react';
import SelectQuestion from './SelectQuestion';
import Identification from './Identification';
import MultipleChoice from './MultipleChoice';

import { Consumer } from '../../Context';

export default () => (
  <Consumer>
    {({ activeInModal }) => {
      switch (activeInModal) {
        case 'A':
          return <SelectQuestion />;
        case 'B':
          return <Identification />;
        case 'C':
          return <MultipleChoice />;
        default:
          return <SelectQuestion />;
      }
    }}
  </Consumer>
);
