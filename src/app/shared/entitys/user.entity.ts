export class UserLoginParams {
  email: string;
  password: string;
}

export class UserSignInParams extends UserLoginParams {
  name: string;
  lastName: string;
}
