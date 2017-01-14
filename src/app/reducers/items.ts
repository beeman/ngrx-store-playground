import { Action, ActionReducer } from '@ngrx/store';

export const items: ActionReducer<any[]> = (state = [], action: Action) => {
  switch (action.type) {

    case 'DESELECT':
      return state.filter(item => item.id !== action.payload.id);

    case 'SELECT':
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    default:
      return state;
  }
};
