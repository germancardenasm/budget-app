import { Injectable } from '@nestjs/common';
import { AuthenticationDataSource } from '../../remote/';

@Injectable()
export class AuthenticationRepository {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}
  autenticateUser(): string {
    return this.authenticationDataSource.findOneByEmailAndPassword();
  }
}
