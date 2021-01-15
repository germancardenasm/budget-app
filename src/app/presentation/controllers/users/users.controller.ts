import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { UserSignInDto } from '../../dtos';
import { SignUserTask } from '../../../domain';

@Controller('v1/users')
export class UsersController {
  constructor(private signUserTask: SignUserTask) {}

  @Post('sign')
  async sign(@Body() body: UserSignInDto): Promise<string> {
    const response = await this.signUserTask.execute(body);
    return response;
  }
}
