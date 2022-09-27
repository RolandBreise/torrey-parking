export const myListStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: 1000, nextToken: $nextToken) {
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
        Releases {
            items {
                id
                _version
                date
                lot
                number
                studentID
            }
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
      }
      nextToken
      startedAt
    }
  }
`;
export const myGetStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      studentEmail
      studentID
      firstName
      lastName
      Releases {
        items {
          id
          _version
          date
          lot
          number
          studentID
        }
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
export const myListReleases = /* GraphQL */ `
  query ListReleases(
    $filter: ModelReleasesFilterInput
    $nextToken: String
  ) {
    listReleases(filter: $filter, limit: 10000, nextToken: $nextToken) {
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
export const myListParkingSpots = /* GraphQL */ `
  query ListParkingSpots(
    $filter: ModelParkingSpotFilterInput
    $nextToken: String
  ) {
    listParkingSpots(filter: $filter, limit: 1000, nextToken: $nextToken) {
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