import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

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

  checkNetworkQuality() {
    this.network.onConnect().subscribe(() => {
      this.presentToastWithOptions('Connected', 1000, true, 'top', 'success');
    });

    this.network.onDisconnect().subscribe(() => {
      this.presentToastWithOptions('Disconnected', 1000, true, 'top', 'danger');
    });
  }

  constructor(private network: Network, private toastController: ToastController) { }
}
