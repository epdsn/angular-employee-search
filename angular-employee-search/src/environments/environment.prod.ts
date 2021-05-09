import { UserService as MockUserService } from "src/app/services/user.mock.service";
import { UserService } from "src/app/services/user.service";

export const environment = {
  production: true,
  providers: [
    {provide : MockUserService, useClass: UserService}
  ]
};
