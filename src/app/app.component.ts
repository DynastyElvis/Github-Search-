import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module'
import { FormsModule } from '@angular/forms'
// Defining routes
// const routes:Routes=[
//   {path:"users",component:UsersComponent},
//   {path:"repos",component:ReposComponent},
//   {path:"",redirectTo:"/users",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-search';
}