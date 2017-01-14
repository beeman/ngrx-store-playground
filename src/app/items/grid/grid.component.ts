import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent {

  @Input()
  public items;

  @Input()
  public selected;

  @Input()
  public isSelected;

  @Output()
  public itemClick = new EventEmitter();

}
