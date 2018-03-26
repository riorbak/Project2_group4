import { Component, OnInit } from '@angular/core';
import { NewLimbModalComponent } from '../new-limb-modal/new-limb-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../objects';
import { SettingsComponent } from '../settings/settings.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  user: User;

  constructor(private modalService: NgbModal) {
    this.user = JSON.parse(localStorage.getItem('userObject'));
   }

  ngOnInit() {
  }

  openNewPost() {
    const modalRef = this.modalService.open(NewLimbModalComponent);
    modalRef.componentInstance.name = 'World';
  }


  openSettings() {
    const modalRef = this.modalService.open(SettingsComponent);
    // modalRef.componentInstance.email = 'World';
  }
  
  logOut() {
    localStorage.removeItem('profile');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
  }
  

}
