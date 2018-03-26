import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChangePhotoComponent } from '../change-photo/change-photo.component';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { User } from '../objects';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() email: string;
  @Input() type: string;
  user: User;
  firstName: string;
  lastName: string;

  editingOpen: boolean = false;

  // check to see if current user's username matches this profile's username

  constructor(private modalService: NgbModal, public auth:AuthenticationService, private router:Router) {
    this.user = JSON.parse(localStorage.getItem('userObject'));
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }

  ngOnInit() {
    // if (!this.auth.userProfile) {
    //   this.router.navigate(['login']);
    // }
  }

  openProfileEditModal(){
    const modalRef = this.modalService.open(ChangePhotoComponent);
    modalRef.componentInstance.type = 'Profile';
    modalRef.componentInstance.email = this.email;
  }

  openCoverEditModal(){
    const modalRef = this.modalService.open(ChangePhotoComponent);
    modalRef.componentInstance.type = 'Cover';
    modalRef.componentInstance.email = this.email;
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
