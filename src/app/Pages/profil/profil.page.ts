import { FirebaseService } from './../../Service/firebase.service';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

import { NetworkService } from '../../Service/network.service';
import { BrightnessService } from '../../Service/brightness.service';
import { AuthenticationService } from '../../Service/authentication.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  getImageResult;
  userPseudo = JSON.parse(localStorage.getItem('user')).pseudo;
  userImage;
  brightness = 7;

  galleryOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 0
  };

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 1,
    correctOrientation: true
  };

  constructor(
    private toastController: ToastController,
    private camera: Camera,
    private networkService: NetworkService,
    private brightService: BrightnessService,
    private storage: AngularFireStorage,
    private fireService: FirebaseService,
    private authenticationService: AuthenticationService
  ) {
    this.networkService.checkNetworkQuality();
  }

  ionViewWillEnter() {
    this.getProfileImage(JSON.parse(localStorage.getItem('user')).pseudo);
  }

  signOut() {
    this.authenticationService.logout();
  }

  getProfileImage(pseudo) {
    this.fireService.getImageProfil(pseudo)
      .subscribe(res => {
      this.userImage = res;
      }, () => {
        this.userImage =
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

  async chooseImage(type: string) {
    if (type === 'camera') {
      this.getImageResult = await this.camera.getPicture(this.cameraOptions);
      this.uploadImageToFirebase(this.getImageResult);

    } else if (type === 'gallery') {
      this.getImageResult = await this.camera.getPicture(this.galleryOptions);
      this.uploadImageToFirebase(this.getImageResult);
    }
  }

  uploadImageToFirebase(result) {
    const image = `data:image/jpeg;base64,${result}`;
    const imageRef = this.storage.ref('').child('').child(JSON.parse(localStorage.getItem('user')).pseudo);
    imageRef.putString(image, 'data_url').then(() => {
      this.getProfileImage(JSON.parse(localStorage.getItem('user')).pseudo);
      this.presentToastWithOptions('Profile picture successfuly updated.', 1000, true, 'top', 'success');
    }, () => {
      this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
    });
  }
}
