import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { IEmployeeService } from './employees.service.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements IEmployeeService {

  constructor(private httpClient : HttpClient) {}

  getEmployees() {
    return this.httpClient.get('/api/employees') as Observable<Employee[]>;
  }

}
