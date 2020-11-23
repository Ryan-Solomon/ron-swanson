import React, { FC } from 'react';
import './SingleQuote.styles.scss';
import swansonLogo from '../../img/swansonLogo.jpg';

type Props = {
  quote: string;
};

const SingleQuote: FC<Props> = ({ quote }) => {
  return (
    <div className='single-quote-container'>
      <img src={swansonLogo} alt='Ron Swanson' />
      <h2>"{quote}"</h2>
    </div>
  );
};

export default SingleQuote;
