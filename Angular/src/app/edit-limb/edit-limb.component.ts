import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Limb } from '../objects';
import { BackendService } from '../backend/backend.service';


@Component({
  selector: 'app-edit-limb',
  templateUrl: './edit-limb.component.html',
  styleUrls: ['./edit-limb.component.css']
})
export class EditLimbComponent implements OnInit {

  @Input() id;

  constructor(public activeModal: NgbActiveModal, public server: BackendService) {

  }

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.close();
  }


  updateLimb(): void {

    let limbText: string = (<HTMLInputElement>document.getElementById("limbTextArea")).value;
    var limb: Limb = new Limb();
    limb.id = this.id;



    //file uploading
    let input: any;
    let files = [];
    let filename: any;
    input = document.getElementById("inputImg");
    if (input) {
        files = input.files;

      let theFile: File = files[0];
      limb.content = limbText;

        this.server.uploadPhoto(localStorage.getItem('username'), "", theFile).subscribe(res => {
          let urlObject = { url: '' };
          urlObject = JSON.parse(JSON.stringify(res));
          // console.log(urlObject.url);

          limb.content = limb.content + "&&&" + urlObject.url;

          this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
          //reload the limb list
          this.closeModal();

        });
      }
      else {
        console.log("inside else");
        limb.content = limbText; 
        console.log(limb);
        this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
        //reload the limb list
        this.closeModal();
      }
  }

  deleteLimb(){
    this.server.deleteLimb(this.id).subscribe();
    this.closeModal();
  }

}
