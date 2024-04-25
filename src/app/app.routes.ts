import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'signup', component: SignupComponent },
];

export default routes;