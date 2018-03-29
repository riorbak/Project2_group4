import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../objects';
import { BackendService } from '../backend/backend.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user : User = new User();
  editingOpen: boolean = false;
  @Input() userEmail;
  @Input() firstName;
  @Input() lastName;
  @Input() password = 'myPassword';
  
  constructor(public activeModal: NgbActiveModal, public server : BackendService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userObject"));
    this.userEmail=this.user.email;
    this.firstName=this.user.firstName;
    this.lastName=this.user.lastName;
  }

  closeModal() {
    this.activeModal.close();
  }

  openCloseEditing() {
    let currentClass: string = document.getElementById("editIcon").getAttribute("class");
    console.log(currentClass);
    if(currentClass == "fa fa-lock edit"){
      document.getElementById("editIcon").setAttribute("class", "fa fa-unlock-alt");
      this.editingOpen = true;
    } else {
      document.getElementById("editIcon").setAttribute("class", "fa fa-lock edit");
      this.editingOpen = false;
    }
    console.log(this.editingOpen);
  }

  showHidePass() {
    let currentClass: string = document.getElementById("passVisible").getAttribute("class");
    if(currentClass == "fa fa-eye-slash"){
      document.getElementById("passVisible").setAttribute("class", "fa fa-eye");
      document.getElementById("containsPass").setAttribute("class", "user-info");
    } else {
      document.getElementById("passVisible").setAttribute("class", "fa fa-eye-slash");
      document.getElementById("containsPass").setAttribute("class", "user-info pass");
    }
  }

  updateUser()
  {
    let user : User = new User();
    user.username=this.user.username;
    user.firstName=(<HTMLInputElement>document.getElementById("newFName")).value;
    user.lastName=(<HTMLInputElement>document.getElementById("newLName")).value;

    //update localstorage
    this.user.firstName=user.firstName;
    this.user.lastName=user.lastName;

    localStorage.setItem("userObject",JSON.stringify(this.user));

    this.server.updateUser(user).subscribe( res=> {this.closeModal()} );
  }

}
