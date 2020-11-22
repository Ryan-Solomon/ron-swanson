import { initialState } from './appContext';
import { TAction, TInitialState } from '../types/types';

export const reducer = (
  state = initialState,
  action: TAction
): TInitialState => {
  switch (action.type) {
    case 'SET_RANDOM_QUOTE':
      return {
        ...state,
        randomSwansonQuote: action.payload,
        status: 'idle',
      };
    case 'SET_LOADING':
      return {
        ...state,
        status: 'loading',
      };
    case 'SET_ERROR':
      return {
        ...state,
        status: 'error',
      };
  }
};
