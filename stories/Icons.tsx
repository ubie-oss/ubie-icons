import React, { FC } from 'react';
import * as IconComponents from '../src/index';
import './Icons.css';

export const Icons: FC = () => {
  return (
    <div className="grid">
      {Object.keys(IconComponents).map((c) => (
        <div className="item" key={c}>
          {IconComponents[c]()}
          <p className="title">{c}</p>
        </div>
      ))}
    </div>
  );
};
