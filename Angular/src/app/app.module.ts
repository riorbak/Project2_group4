import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LimbComponent } from './limb/limb.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LimbBodyComponent } from './limb-body/limb-body.component';
import { LimbListComponent } from './limb-list/limb-list.component';
import { LikeComponent } from './like/like.component';
import { SearchComponent } from './search/search.component';
import { DbService } from './service/db.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    RegistrationComponent,
    LimbComponent,
    FeedComponent,
    ProfileComponent,
    LimbBodyComponent,
    LimbListComponent,
    LikeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
