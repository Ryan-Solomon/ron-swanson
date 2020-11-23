export interface InitialContext {
  fetchRandomSwansonQuote: () => void;
  fetchAllSwansonQuotes: (amount: number) => void;
  randomSwansonQuote: string;
  allSwansonQuotes: string[];
  status: 'loading' | 'error' | 'idle';
}

export type TAction =
  | {
      type: 'SET_RANDOM_QUOTE';
      payload: string;
    }
  | {
      type: 'SET_ALL_QUOTES';
      payload: string[];
    }
  | {
      type: 'SET_LOADING';
    }
  | {
      type: 'SET_ERROR';
    };

export type TInitialState = {
  randomSwansonQuote: string;
  allSwansonQuotes: string[];
  status: 'loading' | 'error' | 'idle';
};
