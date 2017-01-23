import { Action, ActionReducer } from '@ngrx/store';

const initialState = [
  { id: '0', name: 'Item 0'},
  { id: '1', name: 'Item 1'},
  { id: '2', name: 'Item 2'},
  { id: '3', name: 'Item 3'},
  { id: '4', name: 'Item 4'},
  { id: '5', name: 'Item 5'},
  { id: '6', name: 'Item 6'},
  { id: '7', name: 'Item 7'},
  { id: '8', name: 'Item 8'},
  { id: '9', name: 'Item 9'},
  { id: 'A', name: 'Item A'},
  { id: 'B', name: 'Item B'},
];

export const items: ActionReducer<any[]> = (state = initialState, action: Action) => {
  switch (action.type) {

    default:
      return state;
  }
};
