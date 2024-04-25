import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterOutlet]
})
export class HomeComponent {

  constructor(private router: Router) { }

  gotosignup() {
    this.router.navigate(['/signup']); // Navigate to login on button click
  }
}
