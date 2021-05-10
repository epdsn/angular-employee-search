import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.mock.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() users: User[];

  @Input() totalRecords: number;

  currentValue: string;

  results: string;

  @Input() message : string;

  @Input() username : string;

  @Input() userid : number;


  constructor() { }

  ngOnInit(): void {
  }

}
