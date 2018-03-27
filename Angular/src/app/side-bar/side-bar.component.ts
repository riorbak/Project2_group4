import { Component, OnInit, Input } from '@angular/core';
import { NewLimbModalComponent } from '../new-limb-modal/new-limb-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../objects';
import { SettingsComponent } from '../settings/settings.component';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() user: User;
  url : string = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";

  constructor(private modalService: NgbModal, private server: BackendService) {
    this.user = JSON.parse(localStorage.getItem('userObject'));
   }

  ngOnInit() {
    let authorResult = this.server.getUserByUsername(localStorage.getItem('username')).subscribe(res => {
      this.user = <User> res;
          if(this.user.profilePic)
            this.url=this.user.profilePic;
          console.log(this.url+" of "+this.user.firstName)
          console.log("User:"+JSON.stringify(this.user));
    });
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
