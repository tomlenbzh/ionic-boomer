import { Injectable } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';

@Injectable({
  providedIn: 'root'
})
export class BrightnessService {

  constructor(private bright: Brightness) { }

  changeBrightness(brightness: number) {
    this.bright.setBrightness(brightness);
  }

  getCurrentBrightness() {
    this.bright.getBrightness();
  }
}
