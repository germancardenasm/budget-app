import { Module } from '@nestjs/common';
import { UsersController } from './controllers';
import { DomainModule } from '../domain';

@Module({
  controllers: [UsersController],
  imports: [DomainModule],
})
export class PresentationModule {}
