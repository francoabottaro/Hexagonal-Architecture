import { UserCreateAt } from "./UserCreateAt";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createAt: UserCreateAt;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createAt: UserCreateAt,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createAt = createAt;
  }
}
