/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      studentEmail
      studentID
      firstName
      lastName
      Releases {
        nextToken
        startedAt
      }
      ParkingSpot {
        id
        lot
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        parkingSpotStudentId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentParkingSpotId
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentEmail
        studentID
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentParkingSpotId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        studentEmail
        studentID
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentParkingSpotId
      }
      nextToken
      startedAt
    }
  }
`;
export const getParkingSpot = /* GraphQL */ `
  query GetParkingSpot($id: ID!) {
    getParkingSpot(id: $id) {
      id
      lot
      number
      Student {
        id
        studentEmail
        studentID
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentParkingSpotId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      parkingSpotStudentId
    }
  }
`;
export const listParkingSpots = /* GraphQL */ `
  query ListParkingSpots(
    $filter: ModelParkingSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParkingSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lot
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        parkingSpotStudentId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParkingSpots = /* GraphQL */ `
  query SyncParkingSpots(
    $filter: ModelParkingSpotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParkingSpots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        lot
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        parkingSpotStudentId
      }
      nextToken
      startedAt
    }
  }
`;
export const getReleases = /* GraphQL */ `
  query GetReleases($id: ID!) {
    getReleases(id: $id) {
      id
      date
      lot
      number
      studentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReleases = /* GraphQL */ `
  query ListReleases(
    $filter: ModelReleasesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReleases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        lot
        number
        studentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReleases = /* GraphQL */ `
  query SyncReleases(
    $filter: ModelReleasesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReleases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        lot
        number
        studentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
