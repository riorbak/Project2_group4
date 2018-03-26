import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditLimbComponent } from '../edit-limb/edit-limb.component';
import { DatePipe } from '@angular/common';
import { User } from '../objects';
import { BackendService } from '../backend/backend.service';

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
  firstName: string;
  lastName: string;
  user: User;

  constructor(private modalService: NgbModal, private server: BackendService) {

  }

  ngOnInit() {
    let authorResult = this.server.getUserByUsername(this.owner).subscribe(res => {
      let user: User = <User>res;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    });
  }

  open() {
    const modalRef = this.modalService.open(EditLimbComponent);
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.content = this.content;
  }

}
