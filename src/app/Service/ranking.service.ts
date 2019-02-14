import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from './../Models/response';
import { HttpClient } from '@angular/common/http';

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getRanking() {
    return this.http.get<Response>(ApiUrl + 'top');
  }
}
