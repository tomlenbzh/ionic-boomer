import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentsModule { }
