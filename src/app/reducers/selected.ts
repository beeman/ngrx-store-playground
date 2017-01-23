import { Action, ActionReducer } from '@ngrx/store';

export const selected: ActionReducer<any[]> = (state = [], action: Action) => {
  switch (action.type) {

    case 'ITEM_DESELECT':
      return state.filter(item => item.id !== action.payload.id);

    case 'ITEM_SELECT':
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    default:
      return state;
  }
};
