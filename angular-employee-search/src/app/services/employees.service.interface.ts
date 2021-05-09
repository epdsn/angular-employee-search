import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";

export interface IEmployeeService {
    getEmployees() : Observable<Employee[]>;
}