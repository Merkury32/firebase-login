export class User {
  firstname: string;
  lastname: string;
  adress: string;
  phone: string;
  id: string;

  constructor(user: any) {
    if (user) Object.assign(this, user);
  }
}
