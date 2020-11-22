import React from 'react';
import { useAppContext } from './../../context/appContext';
import './RandomQuote.styles.scss';

const RandomQuote = () => {
  const { fetchRandomSwansonQuote, randomSwansonQuote } = useAppContext();
  console.log(randomSwansonQuote);

  return (
    <main className='fetch-random-container'>
      <section className='search-random-quote'>
        <h1>What will Ron say next?</h1>
        <button onClick={fetchRandomSwansonQuote}>Find Out Here</button>
        {randomSwansonQuote && <h4>"{randomSwansonQuote}"</h4>}
      </section>
    </main>
  );
};

export default RandomQuote;
