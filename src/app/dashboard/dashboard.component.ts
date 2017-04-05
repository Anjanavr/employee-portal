import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedValue: string;

  viewChanged(selectedView: string) {
    console.log(selectedView, "dashboard");
    this.selectedValue = selectedView;
  }
};
