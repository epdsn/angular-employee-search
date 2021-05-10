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
      userName : 'Jake the snake',
      userID : 1111
    },
    {
      userName : 'Bob Bobson',
      userID : 1234
    },
    {
      userName : 'Elle Bartlett',
      userID : 5678
    },
    {
      userName : 'Lubna Fowler',
      userID : 7892
    },
    {
      userName : 'Jamie-Leigh Faulkner',
      userID : 1568
    },
    {
      userName : 'Joseff Leal',
      userID : 5936
    },
    {
      userName : 'Husnain Merrill',
      userID : 9463
    },
    {
      userName : 'Christina Navarro',
      userID : 2876
    },
    {
      userName : 'Tamia Robinson',
      userID : 5678
    },
    {
      userName : 'Raisa Arias',
      userID : 4267
    },
    {
      userName : 'Mylo Lloyd',
      userID : 5567
    },
    {
      userName : 'Beatrix Bowen',
      userID : 6590
    },
    {
      userName : 'Cadi Dennis',
      userID : 2376
    },
    {
      userName : 'Sahara Bourne',
      userID : 9637
    },
    {
      userName : 'Waqar Sutherland',
      userID : 9062
    },
    {
      userName : 'Ptolemy Brandt',
      userID : 1555
    }

 ];

  getEmployees() : Observable<User[]> {
    return of(this.users);
  }
}
