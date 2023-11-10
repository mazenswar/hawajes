// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Mawwal, Photo, Article } = initSchema(schema);

export {
  Mawwal,
  Photo,
  Article
};