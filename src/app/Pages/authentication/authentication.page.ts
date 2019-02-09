import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})

export class AuthenticationPage implements OnInit {

  showComponent = true;

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

  constructor(private keyboard: Keyboard, private network: Network, public toastController: ToastController) {
    this.network.onConnect().subscribe(() => {
      console.log('Connected');
      this.presentToastWithOptions('Connected', 4000, true, 'top', 'success');
    });

    this.network.onDisconnect().subscribe(() => {
      console.log('Disconnected');
      this.presentToastWithOptions('Disconnected', 4000, true, 'top', 'danger');
    });

    this.network.onchange().subscribe(() => {
      console.log('Change...');
      this.presentToastWithOptions('Changing Network', 4000, true, 'top', 'primary');
    });
  }

  ngOnInit() { }

  switchComponent() {
    this.showComponent = !this.showComponent;
  }

}
