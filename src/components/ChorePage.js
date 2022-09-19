import React from 'react';
import Chore from './Chore';

const ChorePage = () => {
  return (
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
      </div>
      <div class='columns'>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
        <div class='column'>
          <Chore />
        </div>
      </div>
    </div>
  );
};

export default ChorePage;
