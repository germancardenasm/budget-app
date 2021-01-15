import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../data';
import { UserSignInParams } from '../../shared';

@Injectable()
export class SignUserTask {
  constructor(private userRepository: UserRepository) {}
  public execute(input: UserSignInParams): Promise<string> {
    return this.userRepository.createUser(input);
  }
}
