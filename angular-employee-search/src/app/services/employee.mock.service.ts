import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Employee } from "../models/employee.model";
import { IEmployeeService } from './employees.service.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements IEmployeeService {

  employees: Employee[] = [  
    {
      userName : 'Bob Bobson',
      userID : 1234
    },
    {
      userName : 'Jane Smith',
      userID : 5678
    }
 ];

  getEmployees() : Observable<Employee[]> {
    return of(this.employees);
  }
}
