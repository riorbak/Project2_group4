import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  @Input() profilePhoto: any;
  @Input('url') set url(value: any)
  {
    this.profilePhoto = this.sanitization.bypassSecurityTrustStyle("url("+value+")");
  };

  constructor(private sanitization: DomSanitizer) { 
    
  }
  
  ngOnInit() 
  {

    this.url = "/assets/images/user-200.png";
    this.profilePhoto = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
  }

  ngOnChanges() {
  //   console.log("profile-photo onchanges this.url: " + this.url);
  //   console.log("profile-photo onchanges this.profilePhoto: " + this.profilePhoto);
  }


  setNewPhotoPreview(newPhoto: any) {
    this.profilePhoto = newPhoto;
  }

}
