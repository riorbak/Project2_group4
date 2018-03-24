import { Component, OnInit } from '@angular/core';
import {BirthdayInput} from 'angularjs-input-birthday';
import {IMyDpOptions} from '../../../node_modules/angular4-datepicker/src/my-date-picker';
import {User} from '../objects';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

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

registerUser()
{
  console.log(this.model);
  console.log(this.user);
  console.log("password:"+this.password);
  console.log("confirm password:"+this.confirmpassword);
}


}
 
