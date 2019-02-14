import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private storage: AngularFireStorage) { }

  getImageProfil(pseudo) {
    return this.storage.ref(pseudo).getDownloadURL();
  }
}
