import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  editingOpen: boolean = false;
  @Input() userEmail = 'myemail@gmail.com';
  @Input() firstName = 'My';
  @Input() lastName = 'Name';
  @Input() password = 'myPassword';
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
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

}
