/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateParkingSpot = /* GraphQL */ `
  subscription OnCreateParkingSpot {
    onCreateParkingSpot {
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
export const onUpdateParkingSpot = /* GraphQL */ `
  subscription OnUpdateParkingSpot {
    onUpdateParkingSpot {
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
export const onDeleteParkingSpot = /* GraphQL */ `
  subscription OnDeleteParkingSpot {
    onDeleteParkingSpot {
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
export const onCreateReleases = /* GraphQL */ `
  subscription OnCreateReleases {
    onCreateReleases {
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
export const onUpdateReleases = /* GraphQL */ `
  subscription OnUpdateReleases {
    onUpdateReleases {
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
export const onDeleteReleases = /* GraphQL */ `
  subscription OnDeleteReleases {
    onDeleteReleases {
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
