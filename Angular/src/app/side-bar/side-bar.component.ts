import { Component, OnInit } from '@angular/core';
import { NewLimbModalComponent } from '../new-limb-modal/new-limb-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  

  constructor(private modalService: NgbModal) { }

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
  

}
