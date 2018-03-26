import { Component, OnInit } from '@angular/core';
import { BirthdayInput } from 'angularjs-input-birthday';
import { IMyDpOptions } from '../../../node_modules/angular4-datepicker/src/my-date-picker';
import { User } from '../objects';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private Server: BackendService) { }

  ngOnInit() {
  }

public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
};
public date = new Date();
public model: any = 
{ 
  date: 
  { year: this.date.getFullYear(), 
    month: this.date.getMonth()+1, 
    day: this.date.getDate() 
  }
};

public user=new User();
public password: string;
public confirmpassword: string;
public disabled: boolean=true;


verifyPasswords()
{
  if(this.password!==this.confirmpassword)
  {
      //TODO: show a modal or some shit
      alert("Passwords must match");
  }
  else
  {
    this.disabled=false;;
  }
}



registerUser()
{
  this.user.bdate=this.model.jsdate;
  console.log(this.user.bdate);
  this.postNewUser(this.user);
}

postNewUser(user : User): void 
{
  this.Server.postNewUser(user).subscribe( res=>{
    let x : User=<User>res;
    if(!x)
      alert("username is already taken!");
    else
      alert("register succesful");
  });  
}


}
 
