// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Photo, Article } = initSchema(schema);

export {
  Photo,
  Article
};