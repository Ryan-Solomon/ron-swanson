import React, { useEffect, useState } from 'react';
import { useAppContext } from './../../context/appContext';
import { v4 as uuidv4 } from 'uuid';
import SingleQuote from './../single-quote/SingleQuote';
import { useReducer } from 'react';
import './AllQuotes.styles.scss';

type pageState = {
  startPage: number;
  endPage: number;
};

const initialPageState: pageState = {
  startPage: 0,
  endPage: 9,
};

type TPageAction =
  | {
      type: 'NEXT';
      payload: number;
    }
  | {
      type: 'PREV';
      payload: number;
    };

const reducer = (state: pageState, action: TPageAction) => {
  switch (action.type) {
    case 'NEXT': {
      return { startPage: state.startPage + 10, endPage: state.endPage + 10 };
    }
    case 'PREV': {
      return {
        startPage: state.startPage - 10,
        endPage: state.endPage - 10,
      };
    }
    default:
      throw new Error('Action not supported');
  }
};

const AllQuotes = () => {
  const { allSwansonQuotes } = useAppContext();
  const [{ startPage, endPage }, dispatch] = useReducer(
    reducer,
    initialPageState
  );

  const getNextPage = (direction: 'NEXT' | 'PREV') => {
    if (direction === 'NEXT') {
      if (startPage === 40) return;
      else {
        dispatch({ type: 'NEXT', payload: 10 });
      }
    } else if (direction === 'PREV') {
      if (startPage === 0) return;
      else {
        dispatch({
          type: 'PREV',
          payload: 10,
        });
      }
    }
  };

  return (
    <main className='all-quotes'>
      <section className='quotes-container'>
        {allSwansonQuotes.length &&
          allSwansonQuotes.map((quote, idx) => {
            if (idx >= startPage && idx <= endPage) {
              return <SingleQuote key={uuidv4()} quote={quote} />;
            }
            return;
          })}
      </section>
      <div className='buttons'>
        <button onClick={() => getNextPage('PREV')}>Previous Page</button>
        <button onClick={() => getNextPage('NEXT')}>Next Page</button>
      </div>
    </main>
  );
};

export default AllQuotes;
