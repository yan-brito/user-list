import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class User extends Model {
  static table = 'users'

  @field('user_id')
  user_id!: string;

  @field('name')
  name!: string;

  @field('birth')
  birth!: string;
  
  @field('email')
  email!: string;

  @field('gender')
  gender!: string;

  @field('avatar')
  avatar!: string;
  
};

export { User };