// import { initialState } from './store';


export const langSwitch = newLang => {
  return { type: 'locale/langSwitch', payload: newLang };
};

const localeInitialState = {
  lang: 'en',
};

export const localeReducer = (state = localeInitialState, action) => {
  switch (action.type) {
    case 'locale/langSwitch':
      return {
        ...state,
        lang: action.payload,
      };
      default:
        return state;
  }
};
