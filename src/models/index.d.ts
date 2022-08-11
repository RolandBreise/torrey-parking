import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReleasesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParkingSpotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Student {
  readonly id: string;
  readonly studentEmail?: string | null;
  readonly studentID?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly Releases?: (Releases | null)[] | null;
  readonly ParkingSpot?: ParkingSpot | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentParkingSpotId?: string | null;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class Releases {
  readonly id: string;
  readonly date?: string | null;
  readonly lot?: string | null;
  readonly number?: string | null;
  readonly studentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Releases, ReleasesMetaData>);
  static copyOf(source: Releases, mutator: (draft: MutableModel<Releases, ReleasesMetaData>) => MutableModel<Releases, ReleasesMetaData> | void): Releases;
}

export declare class ParkingSpot {
  readonly id: string;
  readonly lot?: string | null;
  readonly number?: string | null;
  readonly Student?: Student | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ParkingSpot, ParkingSpotMetaData>);
  static copyOf(source: ParkingSpot, mutator: (draft: MutableModel<ParkingSpot, ParkingSpotMetaData>) => MutableModel<ParkingSpot, ParkingSpotMetaData> | void): ParkingSpot;
}