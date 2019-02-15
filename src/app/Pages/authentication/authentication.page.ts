import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { NetworkService } from '../../Service/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})

export class AuthenticationPage {

  showComponent = true;

  constructor(private keyboard: Keyboard, private networkService: NetworkService, private router: Router) {
    this.networkService.checkNetworkQuality();
  }

  switchComponent() {
    this.showComponent = !this.showComponent;
  }
}
