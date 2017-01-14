import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppStoreModule } from './app.store';

import { AppComponent } from './app.component';

import { ItemsComponent } from './items/items.component';
import { ListComponent } from './items/list/list.component';
import { GridComponent } from './items/grid/grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppStoreModule,
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ListComponent,
    GridComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
