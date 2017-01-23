import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent {

  public items;

  public selected;

  constructor(
    private store: Store<any>
  ) {
    this.store
      .select('items')
      .subscribe(items => this.items = items);

    this.store
      .select('selected')
      .subscribe(selected => this.selected = selected);
  }

  public isSelected(item) {
    return this.selected.find(s => s.id === item.id);
  }

  public itemClick(item) {
    if (this.isSelected(item)) {
      this.store.dispatch({ type: 'ITEM_DESELECT', payload: item});
    } else {
      this.store.dispatch({ type: 'ITEM_SELECT', payload: item});
    }
  }

}
