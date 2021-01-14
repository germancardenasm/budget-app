import { Injectable } from '@nestjs/common';
import { AuthenticationRepository } from '../../data';

@Injectable()
export class AuhenticateUserTask {
  constructor(private authenticationRepository: AuthenticationRepository) {}
  public execute(): string {
    return this.authenticationRepository.autenticateUser();
  }
}
