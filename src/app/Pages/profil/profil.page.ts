import { FirebaseService } from './../../Service/firebase.service';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

import { NetworkService } from '../../Service/network.service';
import { BrightnessService } from '../../Service/brightness.service';
import { AngularFireStorage } from '@angular/fire/storage';

import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  chosenImage;
  brightness = 7;

  galleryOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 0
  };

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 1
  };

  constructor(
    private toastController: ToastController,
    private camera: Camera,
    private networkService: NetworkService,
    private brightService: BrightnessService,
    private storage: AngularFireStorage,
    private webview: WebView,
    private fireService: FirebaseService
  ) {
    this.networkService.checkNetworkQuality();
  }

  ionViewWillEnter() {
    this.getProfile(JSON.parse(localStorage.getItem('user')).pseudo);
  }

  getProfile(pseudo) {
    this.fireService.getImageProfil(pseudo).subscribe(
      res => {
        this.chosenImage = res;
      },
      () => {
        this.chosenImage =
          'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg';
      }
    );
  }

  changeBrightness() {
    const newBrightness = (this.brightness / 10);
    this.brightService.changeBrightness(newBrightness);
  }

  async presentToastWithOptions(message: string, duration: number, showCloseButton: boolean, position, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      showCloseButton: showCloseButton,
      position: position,
      color: color
    });
    toast.present();
  }

  getPicture(type: string) {
    if (type === 'camera') {
      this.camera.getPicture(this.cameraOptions).then((imageData) => {
        imageData = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        this.chosenImage = imageData;
        this.uploadImageToFirebase(imageData);

        this.presentToastWithOptions('Profile picture successfuly updated.', 1000, true, 'top', 'success');
      }, (err) => {
        this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
      });
    } else if (type === 'gallery') {
      this.camera.getPicture(this.galleryOptions).then((imageData) => {
        imageData = this.webview.convertFileSrc(imageData);
        this.chosenImage = imageData;
        this.uploadImageToFirebase(imageData);
        this.presentToastWithOptions('Profile picture successfuly updated.', 1000, true, 'top', 'success');
      }, (err) => {
        this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
      });
    } else {
      this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
    }
  }

  uploadImageToFirebase(image) {
    this.uploadImage(image).then(
      photoURL => {
        this.presentToastWithOptions('Image was updated successfully', 1000, true, 'top', 'success');
      },
      error => {
        this.presentToastWithOptions('Image wasn\'t updated successfully', 1000, true, 'top', 'light');
      }
    );

  }

  encodeImageUri(imageUri, callback) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const img = new Image();
    img.onload = function () {
      const aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = c.toDataURL('image/jpeg');
      callback(dataURL);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI) {
    return new Promise<any>((resolve, reject) => {
      const imageRef = this.storage.ref('').child('').child(JSON.parse(localStorage.getItem('user')).pseudo);
      this.encodeImageUri(imageURI, function (image64) {
        imageRef.putString(image64, 'data_url')
          .then(snapshot => {
            resolve(snapshot.downloadURL);
          }, err => {
            reject(err);
          });
      });
    });
  }
}
