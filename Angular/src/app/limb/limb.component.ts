import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditLimbComponent } from '../edit-limb/edit-limb.component';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  @Input() likes: number; //This will be the number of likes
  @Input() owner: string;
  @Input() postTime: any;
  @Input() content: string;
  @Input() id: number;
  @Input() editingOpen : any;
  @Input() media : string;

  constructor(private modalService: NgbModal) { 
    
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(EditLimbComponent);
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.content = this.content;
  }

}
