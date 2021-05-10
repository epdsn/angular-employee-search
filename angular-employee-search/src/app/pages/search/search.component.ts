import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .getEmployees()
      .subscribe((users) => this.users = users);

      this.totalRecords=this.users.length;
  }

}
