import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { balanceReducer } from './balanceSlice';
import { localeReducer } from './localeSlice';

export const initialState = {
  balance: {
    value: 0,
  },
  locale: {
    lang: 'en',
  },
};

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
