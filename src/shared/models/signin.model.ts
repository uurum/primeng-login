export interface ISignInInput extends ILoginInput {
  username: string | undefined;
}

export interface ILoginInput {
  email: string | undefined;
  password: string | undefined;
}

export class LoginInput implements ILoginInput {
  email!: string | undefined;
  password!: string | undefined;

  constructor(data?: ILoginInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.email = _data["email"];
      this.password = _data["password"];
    }
  }
}
