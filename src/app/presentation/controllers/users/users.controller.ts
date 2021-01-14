import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { AuthenticationDto } from '../../dtos';
import { AuhenticateUserTask } from '../../../domain';

@Controller('v1/users')
export class UsersController {
  constructor(private auhenticateUserTask: AuhenticateUserTask) {}

  @Post('authentication')
  login(@Body() authenticationDto: AuthenticationDto): string {
    return this.auhenticateUserTask.execute();
  }
}
