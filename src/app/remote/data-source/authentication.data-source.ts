import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationDataSource {
  findOneByEmailAndPassword(): string {
    return 'true';
  }
}
