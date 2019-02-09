import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Models/response';

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(ApiUrl + 'auths/login', data);
  }

  getProfile(pseudo) {
    return this.http.get<Response>(ApiUrl + 'user/' + pseudo);
  }
}
