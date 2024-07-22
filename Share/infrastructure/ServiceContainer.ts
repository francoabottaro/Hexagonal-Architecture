import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
export const ServiceContainer = {
  user: {
    getAll: new UserGetAll(),
  },
};
