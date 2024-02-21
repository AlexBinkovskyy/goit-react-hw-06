import { createAction, createReducer } from '@reduxjs/toolkit';

export const langSwitch = createAction('locale/langSwitch');

const localeInitialState = {
  lang: 'en',
};

export const localeReducer = createReducer(localeInitialState, builder =>
  builder.addCase(langSwitch, (state, action) => {
    return {
      ...state,
      lang: action.payload,
    };
  })
);

// export const localeReducer = (state = localeInitialState, action) => {
//   switch (action.type) {
//     case 'locale/langSwitch':
//       return {
//         ...state,
//         lang: action.payload,
//       };
//       default:
//         return state;
//   }
// };
