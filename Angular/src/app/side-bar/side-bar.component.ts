import { Component, OnInit } from '@angular/core';
import { NewLimbModalComponent } from '../new-limb-modal/new-limb-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NewLimbModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  

}
