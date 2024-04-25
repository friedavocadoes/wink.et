import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route to HomeComponent
  { path: 'login', component: LoginComponent } // Login route for LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
