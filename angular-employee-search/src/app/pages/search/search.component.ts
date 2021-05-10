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

  username: string;

  userid: number;

  showResults: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.showResults = false;
  }

  onClickMe() {
    this.userService
      .getEmployees()
      .subscribe((users) => this.users = users);
    this.showResults = true;
    this.users = this.users.filter(x => (this.username !== "" && x.userName.includes(this.username)) || x.userID == this.userid);
    this.totalRecords = this.users.length;
  }

}
