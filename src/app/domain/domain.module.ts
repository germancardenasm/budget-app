import { Module } from '@nestjs/common';
import { AuhenticateUserTask } from './usecases';
import { DataModule } from '../data';

@Module({
  imports: [DataModule],
  exports: [AuhenticateUserTask],
  providers: [AuhenticateUserTask],
})
export class DomainModule {}
