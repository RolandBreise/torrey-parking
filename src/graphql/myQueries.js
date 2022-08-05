export const MyListStudents = /* GraphQL */ `
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