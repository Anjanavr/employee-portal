import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponent {

  @Input() config;

  @Input() isDataAvailable;
}
