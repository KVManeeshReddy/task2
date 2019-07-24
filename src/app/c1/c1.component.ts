import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  users:{status:boolean,name:string,index:number} []
  tusers:{status:boolean,name:string,index:number} []

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: []) => {this.users = data; console.log(this.users );} )
  }

  removeUser(){
    if(this.usersService.removeId != -1){
    this.users.forEach((user,index1)=>{
      if(user.index===this.usersService.removeId){
        this.users.splice(index1,1)
      }
    })
    }
   
  }

}
