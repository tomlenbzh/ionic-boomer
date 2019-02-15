import { AuthGuard } from './Guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', loadChildren: './Pages/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'room', loadChildren: './Pages/room/room.module#RoomPageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './Pages/profil/profil.module#ProfilPageModule', canActivate: [AuthGuard] },
  { path: 'scores', loadChildren: './Pages/scores/scores.module#ScoresPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
