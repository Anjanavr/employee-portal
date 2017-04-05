import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'select-view',
  templateUrl: './select-view.component.html'
})
export class SelectViewComponent {
  selectedView = 'Employees';
  filterDetails = [
    'Employees',
    'Projects'
  ];
  changeView(selectedValue) {
    console.log(selectedValue);
  }
}
