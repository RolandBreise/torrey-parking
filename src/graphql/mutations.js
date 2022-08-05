/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createParkingSpot = /* GraphQL */ `
  mutation CreateParkingSpot(
    $input: CreateParkingSpotInput!
    $condition: ModelParkingSpotConditionInput
  ) {
    createParkingSpot(input: $input, condition: $condition) {
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
export const updateParkingSpot = /* GraphQL */ `
  mutation UpdateParkingSpot(
    $input: UpdateParkingSpotInput!
    $condition: ModelParkingSpotConditionInput
  ) {
    updateParkingSpot(input: $input, condition: $condition) {
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
export const deleteParkingSpot = /* GraphQL */ `
  mutation DeleteParkingSpot(
    $input: DeleteParkingSpotInput!
    $condition: ModelParkingSpotConditionInput
  ) {
    deleteParkingSpot(input: $input, condition: $condition) {
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
export const createReleases = /* GraphQL */ `
  mutation CreateReleases(
    $input: CreateReleasesInput!
    $condition: ModelReleasesConditionInput
  ) {
    createReleases(input: $input, condition: $condition) {
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
export const updateReleases = /* GraphQL */ `
  mutation UpdateReleases(
    $input: UpdateReleasesInput!
    $condition: ModelReleasesConditionInput
  ) {
    updateReleases(input: $input, condition: $condition) {
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
export const deleteReleases = /* GraphQL */ `
  mutation DeleteReleases(
    $input: DeleteReleasesInput!
    $condition: ModelReleasesConditionInput
  ) {
    deleteReleases(input: $input, condition: $condition) {
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
