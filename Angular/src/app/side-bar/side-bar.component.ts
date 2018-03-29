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

user: User;
//user: User=new User;
url : string;


  constructor(private modalService: NgbModal, private server: BackendService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    let username = localStorage.getItem("username");
    //this.server.getUserByUsername(username);
    this.user = <User>JSON.parse(localStorage.getItem('userObject'));
      // .subscribe(res => 
      //   {
      //     this.user = <User> res;
      //     if(this.user.profilePic){
      //       this.url=this.user.profilePic;
      //     } else {
      //       this.url = "https://s3.us-east-2.amazonaws.com/limbo-bucket/user-200.pnghttps://s3.us-east-2.amazonaws.com/limbo-bucket/user-200.png";
      //       // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
      //     }
          
      //   });
  }

  openNewPost() {
    const modalRef = this.modalService.open(NewLimbModalComponent).result.then(res => {
      this.server.getAllLimbs();
    });

    //modalRef.componentInstance.name = 'World';
  }


  openSettings() {
    
    const modalRef = this.modalService.open(SettingsComponent).result.then(res => {
      this.getUser();
    });
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
