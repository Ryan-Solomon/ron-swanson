import React from 'react';
import { useAppContext } from './../../context/appContext';
import './RandomQuote.styles.scss';

const RandomQuote = () => {
  const { fetchRandomSwansonQuote, randomSwansonQuote } = useAppContext();
  console.log(randomSwansonQuote);

  return (
    <main className='fetch-random-container'>
      <section className='search-random-quote'>
        <div className='h1'>Fetch a Ron Swanson Quote!</div>
        <button onClick={fetchRandomSwansonQuote}>Get Quote</button>
        {randomSwansonQuote && <h4>"{randomSwansonQuote}"</h4>}
      </section>
    </main>
  );
};

export default RandomQuote;
