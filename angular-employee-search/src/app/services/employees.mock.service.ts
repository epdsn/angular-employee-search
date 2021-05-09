import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeesMockService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get('/api/employees') as Observable<Employee[]>;
  }

}
