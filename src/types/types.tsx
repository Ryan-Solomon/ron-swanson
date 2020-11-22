export interface InitialContext {
  fetchRandomSwansonQuote: () => void;
  randomSwansonQuote: string;
  status: 'loading' | 'error' | 'idle';
}

export type TAction =
  | {
      type: 'SET_RANDOM_QUOTE';
      payload: string;
    }
  | {
      type: 'SET_LOADING';
    }
  | {
      type: 'SET_ERROR';
    };

export type TInitialState = {
  randomSwansonQuote: string;
  status: 'loading' | 'error' | 'idle';
};
