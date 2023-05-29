import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Assignment';

  users:any;

  constructor(private userData:UserdataService) {
    this.userData.users().subscribe((data)=>{
      this.users = data;
    })
  }

  getFormData(data:any)
  {
    
    this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result);
    })
    
  }

}
