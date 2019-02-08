import { AuthGuard } from './Guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', loadChildren: './Pages/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'room', loadChildren: './Pages/room/room.module#RoomPageModule' },
  { path: 'profile', loadChildren: './Pages/profil/profil.module#ProfilPageModule' },  { path: 'scores', loadChildren: './Pages/scores/scores.module#ScoresPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
