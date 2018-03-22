import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { NewLimbModalComponent } from './new-limb-modal/new-limb-modal.component';


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
    SearchComponent,
    ProfilePhotoComponent,
    NewLimbModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent],
  entryComponents: [NewLimbModalComponent]
})
export class AppModule { }
