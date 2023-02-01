/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
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
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
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
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
