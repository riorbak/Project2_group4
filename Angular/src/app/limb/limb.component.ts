import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditLimbComponent } from '../edit-limb/edit-limb.component';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  @Input() count: number; //This will be the number of likes
  @Input() name: string;
  @Input() timeStamp: any;
  @Input() limbBody: string;
  @Input() limbId: number;
  @Input() editingOpen;

  constructor(private modalService: NgbModal) { 
    
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(EditLimbComponent);
    modalRef.componentInstance.limbId = this.limbId;
    modalRef.componentInstance.limbBody = this.limbBody;
  }

}
