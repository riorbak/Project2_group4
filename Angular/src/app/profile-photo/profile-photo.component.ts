import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  @Input() profilePhoto = "/assets/images/cat.png";
  @Input('url') set url(value: any){
    this.profilePhoto = value;
  };

  constructor() { }

  ngOnInit() {
    this.profilePhoto = "/assets/images/cat.png";
  }



  setNewPhotoPreview(newPhoto: any) {
    this.profilePhoto = newPhoto;
  }

}
