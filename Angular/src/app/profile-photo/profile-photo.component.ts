import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { User } from '../objects';

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
  

  ngOnInit() {
    // console.log(this.profilePhoto);
   
  }

  ngOnChanges() {
 
  }


  setNewPhotoPreview(newPhoto: any) {
    this.profilePhoto = newPhoto;
  }

}
