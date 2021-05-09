import { EmployeeService as MockEmployeeService } from "src/app/services/employee.mock.service";
import { EmployeeService } from "src/app/services/employee.service";

export const environment = {
  production: true,
  providers: [
    {provide : MockEmployeeService, useClass: EmployeeService}
  ]
};
