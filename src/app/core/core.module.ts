import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SelectViewComponent } from '../dashboard/select-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SelectViewComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SelectViewComponent
  ]
})
export class CoreModule { }
