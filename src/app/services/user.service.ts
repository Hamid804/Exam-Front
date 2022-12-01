import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {baseUrl} from "./helper";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8282';

  constructor(private http:HttpClient) { }

  //add user
  public addUser(user:any) {
    return this.http.post(this.url+"/user/",user)
  }

}
