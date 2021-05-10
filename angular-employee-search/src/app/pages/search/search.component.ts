import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.mock.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users: User[];

  totalRecords: number;

  currentValue: string;

  results: string;

  username: string;

  userid: number;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  message = "Hola Mundo!";

  clickMessage = '';

  onClickMe() {

    this.userService
    .getEmployees()
    .subscribe((users) => this.users = users);

    this.totalRecords=this.users.length;


    this.clickMessage = 'You are my hero!';
    this.currentValue = this.username;
    
    this.users.forEach((value, index) => {
      if(value.userName === this.currentValue) {
        this.results = value.userName;
      }
    });




    console.log("username=" + this.username + " userid=" + this.userid);
    
    this.users = this.users.filter(x => x.userName == this.username || x.userID == this.userid);
    this.totalRecords = this.users.length;

    console.log(this.results);

  }

}
