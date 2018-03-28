import { Component, OnInit, Input } from '@angular/core';
import { NewLimbModalComponent } from '../new-limb-modal/new-limb-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../objects';
import { SettingsComponent } from '../settings/settings.component';
import { BackendService } from '../backend/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() user: User=new User;
  url : string;


  constructor(private modalService: NgbModal, private server: BackendService, private router: Router) {
    this.getUser();
  }

  ngOnInit() {
    
  }

  getUser(): void {
    let username = localStorage.getItem("username");
    this.server.getUserByUsername(username)
      .subscribe(res => 
        {
          this.user = <User> res;
          if(this.user.profilePic){
            this.url=this.user.profilePic;
          } else {
            this.url = "/assets/images/user-200.png";
            // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
          }
          
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
    localStorage.removeItem('userObject');
    this.router.navigate(['']);
  }
  

}
