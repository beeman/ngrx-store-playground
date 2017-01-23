import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { items } from './reducers/items';
import { selected } from './reducers/selected';

@NgModule({
  imports: [
    StoreModule.provideStore({
      items,
      selected,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
})
export class AppStoreModule {}
