import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  //backend server data here at url
  url = "https://dummyjson.com/products"
  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.url);
  }

  saveUsers(data:any)
  {
    return this.http.post(this.url,data);
  }

  // users(){
  //   return [
  //     {name:'shubham',age:23},
  //     {name:'Rish',age:25},
  //     {name:'Rahul',age:21},
  //   ]
  // }
}
