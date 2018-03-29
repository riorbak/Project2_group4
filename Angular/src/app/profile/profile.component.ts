import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChangePhotoComponent } from '../change-photo/change-photo.component';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../backend/backend.service';
import { User } from '../objects';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() email: string;
  @Input() type: string;
  @Input() user : User=new User;
  url : any;
  coverUrl: any;
  editingOpen: boolean = false;
  showEditing: boolean = false;

  // check to see if current user's username matches this profile's username
  constructor(private location: Location,
              private route: ActivatedRoute,
              private modalService: NgbModal, 
              public auth:AuthenticationService, 
              private router:Router,
              public server: BackendService,
              private sanitization: DomSanitizer) {

                this.getUser();
                this.showHideProfileEditing();
               

  }


  ngOnInit() {
    // if (!this.auth.userProfile) {
    //   this.router.navigate(['login']);
    // }
    
  }
  
  //GET THE USER
  getUser(): void {
    let username:string = this.route.snapshot.paramMap.get('username');
    this.server.getUserByUsername(username)
      .subscribe(res => 
        {
          this.user = <User> res;
          if(this.user.profilePic){
            this.url=this.user.profilePic;
          } else {
            this.url = "/assets/images/user-200.png";
            // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
          }
          if(!this.user.coverPic){
     
            this.coverUrl = "/assets/images/bg2.png";
            this.coverUrl = this.sanitization.bypassSecurityTrustStyle("url("+this.coverUrl+")");
            } else {
              this.coverUrl = this.user.coverPic;
              this.coverUrl = this.sanitization.bypassSecurityTrustStyle("url("+this.coverUrl+")");
            }
        }
      );
  }

  showHideProfileEditing() {
    let username:string = this.route.snapshot.paramMap.get('username');
    console.log(username);
    let thisUsername: string = localStorage.getItem("username");
   console.log(thisUsername);
    if(username == thisUsername){
      this.showEditing = true;
    } else {
      this.showEditing = false;
    }
  }  

  openProfileEditModal(){
    const modalRef = this.modalService.open(ChangePhotoComponent);
    modalRef.componentInstance.type = 'Profile';
    modalRef.componentInstance.email = this.email;
    // modalRef.componentInstance.url = this.url;
  }

  openCoverEditModal(){
    const modalRef = this.modalService.open(ChangePhotoComponent);
    modalRef.componentInstance.type = 'Cover';
    modalRef.componentInstance.email = this.email;
    modalRef.componentInstance.coverUrl = this.user.coverPic;
  }


  openCloseEditing() {
    let currentClass: string = document.getElementById("editIcon").getAttribute("class");
    console.log(currentClass);
    if(currentClass == "fa fa-lock"){
      document.getElementById("editIcon").setAttribute("class", "fa fa-unlock-alt");
      this.editingOpen = true;
    } else {
      document.getElementById("editIcon").setAttribute("class", "fa fa-lock");
      this.editingOpen = false;
    }
    console.log(this.editingOpen);
  }

}
