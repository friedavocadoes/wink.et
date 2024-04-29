import { Component } from '@angular/core';
import 'bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }
  name: String = '';
  password: String = '';
  onSubmit(f: NgForm) {
    console.log(this.name);
    console.log(this .password);

    if (this.name == "gautham") {
      if (this.password == "eee") {
        this.router.navigateByUrl("/chat");
      }
    }
  }

  // gotochat() {
  //   this.router.navigate(['/chat']); // Navigate to login on button click
  // }
}
