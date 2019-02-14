import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { ToastController } from '@ionic/angular';

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

  constructor(public toastController: ToastController, private authService: AuthenticationService) { }

  ngOnInit() {
    this.login = '';
    this.password = '';
    this.password_confirm = '';
    this.sign_up_error = '';
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Your account has been successfully created. Please sign in with your new credentials.',
      duration: 4000,
      showCloseButton: true,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  signUp() {
    this.sign_up_error = '';
    if (this.login !== '' && this.password !== '' && this.password_confirm !== '') {
      if (this.password === this.password_confirm) {
        this.sign_up_error = '';
        const credentials = {
          'pseudo': this.login,
          'password': this.password,
          'password_confirmation': this.password_confirm
        };
        this.authService.register(credentials)
          .subscribe(
            response => {
              this.sign_up_error = '';
              this.login = '';
              this.password = '';
              this.password_confirm = '';
              this.presentToastWithOptions();
            },
            error => {
              this.sign_up_error = error.error.message;
            }
          );
      } else {
        this.sign_up_error = '';
        this.sign_up_error = 'You must enter the same password !';
      }
    } else {
      this.sign_up_error = '';
      this.sign_up_error = 'Please fill all the fields to create your account !';
    }
  }
}
