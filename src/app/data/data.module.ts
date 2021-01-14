import { Module } from '@nestjs/common';
import { AuthenticationRepository } from './repository';
import { RemoteModule } from '../remote';

@Module({
  imports: [RemoteModule],
  exports: [AuthenticationRepository],
  providers: [AuthenticationRepository],
})
export class DataModule {}
