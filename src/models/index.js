// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Business, Reviews, User, Comment } = initSchema(schema);

export {
  Business,
  Reviews,
  User,
  Comment
};