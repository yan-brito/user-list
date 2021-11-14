import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './userShema';

const schemas = appSchema({
  version: 2,
  tables: [
    userSchema
  ]
});

export { schemas };