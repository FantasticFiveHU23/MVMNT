import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly rating?: number | null;
  readonly location: string;
  readonly account?: string | null;
  readonly email: string;
  readonly reviews?: (Reviews | null)[] | null;
  readonly category?: string | null;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly rating?: number | null;
  readonly location: string;
  readonly account?: string | null;
  readonly email: string;
  readonly reviews: AsyncCollection<Reviews>;
  readonly category?: string | null;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

type EagerReviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly business?: Business | null;
  readonly user?: User | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessReviewsId?: string | null;
  readonly userReviewsId?: string | null;
}

type LazyReviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly business: AsyncItem<Business | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessReviewsId?: string | null;
  readonly userReviewsId?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews>) => MutableModel<Reviews> | void): Reviews;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly reviews?: (Reviews | null)[] | null;
  readonly firstname: string;
  readonly lastname: string;
  readonly Business?: Business | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBusinessId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly reviews: AsyncCollection<Reviews>;
  readonly firstname: string;
  readonly lastname: string;
  readonly Business: AsyncItem<Business | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBusinessId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Reviews | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewsCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Reviews | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewsCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}