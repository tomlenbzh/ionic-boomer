import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../Components/header/header.component';
import { RoomCardComponent } from '../Components/room-card/room-card.component';
import { FooterComponent } from '../Components/footer/footer.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RoomCardComponent,
    FooterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RoomCardComponent,
    FooterComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
