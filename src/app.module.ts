import { Module } from '@nestjs/common';
import { PresentationModule } from './app/presentation';

@Module({
  imports: [PresentationModule],
})
export class AppModule {}
