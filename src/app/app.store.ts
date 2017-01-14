import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { items } from './reducers/items';

@NgModule({
  imports: [ StoreModule.provideStore({ items }) ],
})
export class AppStoreModule {}
