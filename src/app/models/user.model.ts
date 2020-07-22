export class User {
  firstname: string
  lastname: string
  adress: string
  phone: string
  id: number

  constructor(user: any) {
    if (user) Object.assign(this, user);
  }
}
