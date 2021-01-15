import { Module } from '@nestjs/common';
import { UserDataSource } from './data-source';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'budget',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'userSchema', schema: userSchema }]),
  ],
  exports: [UserDataSource],
  providers: [UserDataSource],
})
export class RemoteModule {}
