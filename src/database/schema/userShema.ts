import { tableSchema } from '@nozbe/watermelondb';

const userSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'user_id',
      type: 'string'
    },
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'birth',
      type: 'string'
    },
    {
      name: 'email',
      type: 'string'
    },
    {
      name: 'gender',
      type: 'string'
    },
    {
      name: 'avatar',
      type: 'string'
    },
  ]
});

export { userSchema };