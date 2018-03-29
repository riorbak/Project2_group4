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
  @Input() content;

  constructor(public activeModal: NgbActiveModal, public server: BackendService) {

  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  changeLabel() {
    let input: any;
    let files = [];
    let filename: any;
    input = document.getElementById("newLimbImg");
    files = input.files;
    filename = files[0].name;
    let label: any;
    document.getElementById("inputImgLabel").innerHTML = '<i class="fa fa-upload" style="padding-right:.5em"></i>' + filename;
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
    let theFile : File = files[0];
    if (theFile) 
    {
        limb.content = limbText;
        this.server.uploadPhoto(localStorage.getItem('username'), "", theFile).subscribe(res => {
        let urlObject = { url: '' };
        urlObject = JSON.parse(JSON.stringify(res));
        limb.content = limb.content + "&&&" + urlObject.url;
        this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
        //reload the limb list
        this.closeModal();
        });
    }
    else 
    {
        //we have the id of the limb
        this.server.getLimbById(this.id).subscribe( res =>{
        //get it from the server
        let limb=<Limb>res;
        //extract the media link
        if(limb.content.includes("&&&http"))
        {
          let url=limb.content.substring(limb.content.lastIndexOf("&&&http"));
          limbText=limbText+url;
        }
        //append link to the end of limb text using the correct annotation (&&&)
        limb.content = limbText; 
        this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
        this.closeModal();
        });
    }
    this.closeModal();
  }

  deleteLimb(){
    this.server.deleteLimb(this.id).subscribe();
    this.closeModal();
  }

}
