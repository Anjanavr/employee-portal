import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'select-view',
  templateUrl: './select-view.component.html'
})
export class SelectViewComponent {
  @Input() selectedView = 'Employees';
  @Output() viewChanged = new EventEmitter<string> ();

  filterDetails = [
    'Employees',
    'Projects'
  ];
  changeView(selectedValue: string) {
    this.viewChanged.emit(selectedValue);
  }
}
