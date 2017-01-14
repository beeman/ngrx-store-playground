import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent {

  public items = [
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

  public selected;

  constructor(
    private store: Store<any>
  ) {
    this.store
      .select('items')
      .subscribe(selectedItems => this.selected = selectedItems);
  }

  public isSelected(item) {
    return this.selected.find(s => s.id === item.id);
  }

  public itemClick(item) {
    if (this.isSelected(item)) {
      this.store.dispatch({ type: 'DESELECT', payload: item});
    } else {
      this.store.dispatch({ type: 'SELECT', payload: item});
    }
  }

}
