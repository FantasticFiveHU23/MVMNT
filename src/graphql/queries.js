/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      rating
      location
      account
      email
      reviews {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessReviewsId
          userReviewsId
        }
        nextToken
        startedAt
      }
      category
      username
      bio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        rating
        location
        account
        email
        reviews {
          nextToken
          startedAt
        }
        category
        username
        bio
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
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        rating
        location
        account
        email
        reviews {
          nextToken
          startedAt
        }
        category
        username
        bio
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      reviews {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessReviewsId
          userReviewsId
        }
        nextToken
        startedAt
      }
      firstname
      lastname
      Business {
        id
        name
        rating
        location
        account
        email
        reviews {
          nextToken
          startedAt
        }
        category
        username
        bio
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBusinessId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        reviews {
          nextToken
          startedAt
        }
        firstname
        lastname
        Business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBusinessId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        reviews {
          nextToken
          startedAt
        }
        firstname
        lastname
        Business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBusinessId
      }
      nextToken
      startedAt
    }
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
      id
      title
      business {
        id
        name
        rating
        location
        account
        email
        reviews {
          nextToken
          startedAt
        }
        category
        username
        bio
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        email
        reviews {
          nextToken
          startedAt
        }
        firstname
        lastname
        Business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBusinessId
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reviewsCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      businessReviewsId
      userReviewsId
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          username
          email
          firstname
          lastname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBusinessId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        businessReviewsId
        userReviewsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          username
          email
          firstname
          lastname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBusinessId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        businessReviewsId
        userReviewsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        business {
          id
          name
          rating
          location
          account
          email
          category
          username
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          username
          email
          firstname
          lastname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBusinessId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        businessReviewsId
        userReviewsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reviewsCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessReviewsId
          userReviewsId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        reviewsCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessReviewsId
          userReviewsId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        reviewsCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
