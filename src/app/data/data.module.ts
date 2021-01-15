import { Module } from '@nestjs/common';
import { UserRepository } from './repository';
import { RemoteModule } from '../remote';

@Module({
  imports: [RemoteModule],
  exports: [UserRepository],
  providers: [UserRepository],
})
export class DataModule {}
