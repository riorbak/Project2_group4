import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LimbListComponent } from './limb-list/limb-list.component';
import { AuthenticationLanderComponent } from './authentication-lander/authentication-lander.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'limbListTest', component: LimbListComponent },
  { path: 'auth', component: AuthenticationLanderComponent },
  { path: 'auth/:code/:state', component: AuthenticationLanderComponent },
  { path: 'verify', component: VerifyEmailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
