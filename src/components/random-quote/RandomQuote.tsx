import React from 'react';
import { useAppContext } from './../../context/appContext';

const RandomQuote = () => {
  const { fetchRandomSwansonQuote, randomSwansonQuote } = useAppContext();
  console.log(randomSwansonQuote);

  return (
    <main className='fetch-random-container'>
      <div className='h1'>Fetch a Ron Swanson Quote!</div>
      <button onClick={fetchRandomSwansonQuote}>Get Quote</button>
      {randomSwansonQuote && <h4>{randomSwansonQuote}</h4>}
    </main>
  );
};

export default RandomQuote;
