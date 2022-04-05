import React from 'react';
import * as IconComponents from '../index';
import './Icons.css'

const pascalToSentence = (text: string): string => {
  const t = text.replace( /([A-Z])/g, " $1" );
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export const Icons = () => {
  return (
    <div className='grid'>
      {Object.keys(IconComponents).map(c => (
        <div className='item' key={c}>
          {IconComponents[c]()}
          <p className='title'>{pascalToSentence(c)}</p>
        </div>
      ))}
    </div>
  )
}
