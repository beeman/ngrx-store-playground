import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public items;

  @Input()
  public selected;

  @Output()
  public itemClick = new EventEmitter();

}
