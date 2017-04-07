import { Component } from '@angular/core';


import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedValue: string;
  fetchCompleted = true;
  details = {
    "headers": [],
    "data": []
  }


  viewChanged(selectedView: string) {
    this.selectedValue = selectedView;
    this.renderDetails(selectedView);
  }

  constructor(private http: Http) {}

  renderDetails(selectedView) {
    this.fetchCompleted = false;
    let fetchUrl = '/app/assets/data/' + selectedView +'.json';
    return this.http
      .get(fetchUrl)
      .subscribe((res: Response) => {
        this.details.data = (res.json())[this.selectedValue];
        this.details.headers = Object.keys(this.details.data[0]);
        this.fetchCompleted = true;
    });
  }
};
