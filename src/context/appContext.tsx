import React, { FC, ReactNode, useContext, useReducer } from 'react';
import { InitialContext, TInitialState } from './../types/types';
import { reducer } from './reducer';

const initialContext: InitialContext = {
  fetchRandomSwansonQuote: () => null,
  fetchAllSwansonQuotes: (amount: number) => null,
  randomSwansonQuote: '',
  allSwansonQuotes: [],
  status: 'idle',
};

export const initialState: TInitialState = {
  randomSwansonQuote: '',
  allSwansonQuotes: [],
  status: 'idle',
};

const AppContext = React.createContext(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { randomSwansonQuote, status, allSwansonQuotes } = state;

  const fetchRandomSwansonQuote = async () => {
    dispatch({
      type: 'SET_LOADING',
    });
    try {
      const res = await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
      );
      const [data] = await res.json();
      dispatch({
        type: 'SET_RANDOM_QUOTE',
        payload: data,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: 'SET_ERROR',
      });
    }
  };
  const fetchAllSwansonQuotes = async (amount: number) => {
    dispatch({
      type: 'SET_LOADING',
    });
    try {
      const res = await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes${amount}`
      );
      const data = await res.json();
      dispatch({
        type: 'SET_ALL_QUOTES',
        payload: data,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: 'SET_ERROR',
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        fetchRandomSwansonQuote,
        fetchAllSwansonQuotes,
        randomSwansonQuote,
        allSwansonQuotes,
        status,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
