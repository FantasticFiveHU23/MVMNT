/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
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
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
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
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
