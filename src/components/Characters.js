import React from 'react';
import Character from './Character';

const Characters = props => {

  const { characters } = props;
  return (
    <div>
      { characters.map((obj) => (<Character character = {obj}/>))}
     
    </div>
  );
};

export default Characters; 