import { Module } from '@nestjs/common';
import { AuthenticationDataSource } from './data-source';

@Module({
  exports: [AuthenticationDataSource],
  providers: [AuthenticationDataSource],
})
export class RemoteModule {}
