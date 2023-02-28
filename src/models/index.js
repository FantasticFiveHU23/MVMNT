// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Business, User, Reviews, Comment, CategoryBusiness } = initSchema(schema);

export {
  Category,
  Business,
  User,
  Reviews,
  Comment,
  CategoryBusiness
};