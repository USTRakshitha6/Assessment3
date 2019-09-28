import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userArray : any [] = [];


  constructor(private http:HttpClient) {

    http.get<any>(`https://jsonplaceholder.typicode.com/users`)
    .subscribe (resData=>{
       this.userArray = resData;
       console.log(this.userArray);
    })
   }

ngOnInit(){

}
}