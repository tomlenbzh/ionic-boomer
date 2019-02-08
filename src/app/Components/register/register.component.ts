import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  login: string;
  password: string;
  password_confirm: string;
  sign_up_error: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.login = '';
    this.password = '';
    this.password_confirm = '';
    this.sign_up_error = '';
  }

  signUp() {
    if (this.login !== '' && this.password !== '' && this.password_confirm !== '') {
      if (this.password === this.password_confirm) {
        this.sign_up_error = '';
        console.log('Sign Up - API request - Success');
        console.log('Login: ' + this.login);
        console.log('Password: ' + this.password);
        console.log('Redirect to: Home');
        this.router.navigateByUrl('home');
      } else {
        this.sign_up_error = 'You must enter the same password !';
        console.log(this.sign_up_error);
      }
    } else {
      this.sign_up_error = 'Please fill all the fields to create your account !';
      console.log(this.sign_up_error);
    }
  }
}
