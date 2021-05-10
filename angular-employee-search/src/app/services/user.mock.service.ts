import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { IUserService } from './user.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  users: User[] = [  
    {
      userName : 'Jake',
      userID : 1111
    },
    {
      userName : 'Bob Bobson',
      userID : 1234
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    }
 ];

  getEmployees() : Observable<User[]> {
    return of(this.users);
  }
}
