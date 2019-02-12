import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

import { NetworkService } from '../../Service/network.service';
import { BrightnessService } from '../../Service/brightness.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  defaultImage = 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg';
  chosenImage = '';
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
    public toastController: ToastController,
    private camera: Camera,
    private networkService: NetworkService,
    private brightService: BrightnessService
  ) {
    this.networkService.checkNetworkQuality();
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
        // const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.chosenImage = imageData;
        this.presentToastWithOptions('Profile picture successfuly updated.', 1000, true, 'top', 'success');
      }, (err) => {
        this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
      });
    } else if (type === 'gallery') {
      this.camera.getPicture(this.galleryOptions).then((imageData) => {
        // const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.chosenImage = imageData;
        this.presentToastWithOptions('Profile picture successfuly updated.', 1000, true, 'top', 'success');
      }, (err) => {
        this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
      });
    } else {
      this.presentToastWithOptions('Picture unchanged.', 1000, true, 'top', 'light');
    }
  }
}
