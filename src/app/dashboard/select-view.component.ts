import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'select-view',
  templateUrl: './select-view.component.html'
})
export class SelectViewComponent {
  @Input() selectedView;
  @Output() viewChanged = new EventEmitter<string> ();

  constructor() {
    this.selectedView = '';
  }

  filterDetails = [
    'employees',
    'projects'
  ];
  changeView(selectedValue: string) {
    this.viewChanged.emit(selectedValue);
  }
  ngOnInit() {
    this.selectedView = 'employees';
    this.changeView('employees');
  }
}
