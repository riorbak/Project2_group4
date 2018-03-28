import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditLimbComponent } from '../edit-limb/edit-limb.component';
import { User } from '../objects';
import { BackendService } from '../backend/backend.service';
import { isUndefined } from 'util';

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

  @Input() user: User=new User;
  url : any;


  constructor(private modalService: NgbModal, private server: BackendService) {  }

  ngOnInit() {
    // this.url =  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
    let authorResult = this.server.getUserByUsername(this.owner).subscribe(res => {
      this.user = <User> res;
        // console.log(this.user.profilePic);
          if(this.user.profilePic){
            this.url=this.user.profilePic;
          } else {
            this.url = "/assets/images/user-200.png";
            // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
          }

    });
  }
  
  open() {
    const modalRef = this.modalService.open(EditLimbComponent);
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.content = this.content;
  }

}
