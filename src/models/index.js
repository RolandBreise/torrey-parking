// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Student, Releases, ParkingSpot } = initSchema(schema);

export {
  Student,
  Releases,
  ParkingSpot
};