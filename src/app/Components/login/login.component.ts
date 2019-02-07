import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  sign_in_error: string;

  constructor() { }

  ngOnInit() {
    this.login = '';
    this.password = '';
    this.sign_in_error = '';
  }

  signIn() {
    if (this.login !== '' && this.password !== '') {
      console.log('Sign In - API request - Success');
      console.log('Login: ' + this.login);
      console.log('Password: ' + this.password);
      console.log('Redirect to: Home');
    } else {
      this.sign_in_error = 'Please fill all the fields to sign in to your account !';
      console.log(this.sign_in_error);
    }
  }
}
