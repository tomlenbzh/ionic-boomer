import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Models/response';
import { Router } from '@angular/router';

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    return this.http.post(ApiUrl + 'auths/login', credentials);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('authentication');
  }

  register(credentials) {
    return this.http.post(ApiUrl + 'auths/signup', credentials);
  }

  getProfile(pseudo) {
    return this.http.get<Response>(ApiUrl + 'user/' + pseudo);
  }
}
