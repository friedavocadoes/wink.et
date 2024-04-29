import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent, LoginComponent, SignupComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'chat-app';

  constructor(private router: Router) { }

  gotologin() {
    this.router.navigate(['/login']); // Navigate to login on button click
  }
}
