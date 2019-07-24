import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  @Input() user;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  sendId(){
    this.usersService.removeId = this.user.index;
    console.log(this.usersService.removeId )
  }

}
