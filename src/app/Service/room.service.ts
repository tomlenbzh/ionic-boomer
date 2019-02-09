import { Response } from './../Models/response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  current_room: any;

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get<Response>(ApiUrl + 'rooms');
  }
}
