import { Injectable } from '@nestjs/common';
import { UserDataSource } from '../../remote';
import { UserSignInParams } from '../../shared';
import { hash } from 'bcrypt';
import { UserAlreadyExistsException } from '../../shared';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private userDataSource: UserDataSource) {}
  async createUser(input: UserSignInParams): Promise<string> {
    const { password, email } = input;
    const hashedPassword = await hash(password, 8);
    try {
      const user = await this.userDataSource.findUserByEmail(email);
      if (!user) {
        return await this.userDataSource.createUser({ ...input, password: hashedPassword });
      } else {
        throw new UserAlreadyExistsException();
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
