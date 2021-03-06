import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  sign_in_error: string;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.login = '';
    this.password = '';
    this.sign_in_error = '';
  }

  signIn() {
    this.sign_in_error = '';
    if (this.login !== '' && this.password !== '') {
      const credentials = {
        'pseudo': this.login,
        'password': this.password
      };
      this.authService.login(credentials)
        .subscribe(
          response => {
            this.sign_in_error = '';
            const res: any = response;
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res._user));
            this.router.navigateByUrl('home');
            this.login = '';
            this.password = '';
          },
          error => {
            this.sign_in_error = error.error.message;
          }
        );
    } else {
      this.sign_in_error = '';
      this.sign_in_error = 'Please fill all the fields to sign in to your account !';
    }
  }
}
