import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/LoginComponent';

@NgModule({
  declarations: [
    HeaderInnerComponent,
    HeaderOuterComponent,
    HeaderBodyComponent,
    HeaderLoginComponent,
    FooterCommonComponent
  ],
  exports: [
    HeaderInnerComponent,
    HeaderOuterComponent,
    HeaderBodyComponent,
    HeaderLoginComponent,
    FooterCommonComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentsModule { }
