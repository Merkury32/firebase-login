export class UserLogin {
  email: string
  password: string
  returnSecureToken: boolean

  constructor(userLogin: any) {
    if (userLogin) Object.assign(this, userLogin);
  }
}
