import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSignInParams } from '../../shared';
@Injectable()
export class UserDataSource {
  constructor(
    @InjectModel('userSchema')
    private userModel: Model<{ email: string; password: string } & Document>
  ) {}
  async createUser(input: UserSignInParams): Promise<string> {
    const createdUser = new this.userModel(input);
    await createdUser.save();
    return input.name;
  }
  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }
}
