// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Business, Reviews, Comment, User, CategoryBusiness } = initSchema(schema);

export {
  Category,
  Business,
  Reviews,
  Comment,
  User,
  CategoryBusiness
};