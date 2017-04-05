import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  

import { LoginService }  from '../login/mock-login.service';

import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SelectViewComponent } from '../dashboard/select-view.component';
import { MenuComponent } from '../menu/menu.component';
import { TableComponent } from '../table-component/table-componnent.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SelectViewComponent,
    MenuComponent,
    TableComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SelectViewComponent,
    MenuComponent,
    TableComponent
  ],
  providers: [
    LoginService
  ]
})
export class CoreModule { }
