import { Module } from '@nestjs/common';
import { SignUserTask } from './usecases';
import { DataModule } from '../data';

@Module({
  imports: [DataModule],
  exports: [SignUserTask],
  providers: [SignUserTask],
})
export class DomainModule {}
