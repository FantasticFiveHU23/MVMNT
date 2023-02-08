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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          businessReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reviewsCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reviewsCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reviewsCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        businessReviewsId
        userReviewsId
      }
      content
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        businessReviewsId
        userReviewsId
      }
      content
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        businessReviewsId
        userReviewsId
      }
      content
      createdAt
      updatedAt
      reviewsCommentsId
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
    onCreateTest(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
    onUpdateTest(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
    onDeleteTest(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
    }
  }
`;
