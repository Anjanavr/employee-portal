import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedValue: string;

  viewChanged(selectedView: string) {
    this.selectedValue = selectedView;
  }
};
