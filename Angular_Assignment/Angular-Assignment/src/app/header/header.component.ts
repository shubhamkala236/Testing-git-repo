import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service';

interface User{
  name:string,
  age:number
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  users:User[]=[];
  userdata:any;
  array:any;
  abc:any;

  constructor(private userData:UserdataService)
  {
    // this.users=userData.users();
    userData.users().subscribe((data)=>{
      // this.array = data;
      this.userdata=data;
      //console.warn(this.userdata); //array of products
      this.abc = this.userdata.products;
    });
    
    
  }
  

  // userData:any[] = [
  //   {name:'shubham',age:23},
  //   {name:'shubham23wew',age:25},
  //   {name:'shubham3',age:21},
  // ]
}
