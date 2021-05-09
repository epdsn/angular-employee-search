import { Observable } from "rxjs";
import { User } from "../models/user.model";

export interface IUserService {
    getEmployees() : Observable<User[]>;
}