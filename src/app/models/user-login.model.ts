export class UserLogin {
  email: string
  password: string

  constructor(userLogin: any) {
    if (userLogin) Object.assign(this, userLogin);
  }
}
