import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category_name: string;
  readonly Businesses?: (CategoryBusiness | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category_name: string;
  readonly Businesses: AsyncCollection<CategoryBusiness>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

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
  readonly bio?: string | null;
  readonly categorys?: (CategoryBusiness | null)[] | null;
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
  readonly bio?: string | null;
  readonly categorys: AsyncCollection<CategoryBusiness>;
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
  readonly business_review?: Business | null;
  readonly review_replies?: (Comment | null)[] | null;
  readonly content: string;
  readonly datePublished?: string | null;
  readonly replies?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessReviewsId?: string | null;
}

type LazyReviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly business_review: AsyncItem<Business | undefined>;
  readonly review_replies: AsyncCollection<Comment>;
  readonly content: string;
  readonly datePublished?: string | null;
  readonly replies?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessReviewsId?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews>) => MutableModel<Reviews> | void): Reviews;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reply?: Reviews | null;
  readonly content: string;
  readonly reviewsID: string;
  readonly datePublished: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reply: AsyncItem<Reviews | undefined>;
  readonly content: string;
  readonly reviewsID: string;
  readonly datePublished: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly reviews?: (string | null)[] | null;
  readonly Reviews?: (Reviews | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly reviews?: (string | null)[] | null;
  readonly Reviews: AsyncCollection<Reviews>;
  readonly Comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCategoryBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryBusiness, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly businessId?: string | null;
  readonly category: Category;
  readonly business: Business;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategoryBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryBusiness, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly businessId?: string | null;
  readonly category: AsyncItem<Category>;
  readonly business: AsyncItem<Business>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CategoryBusiness = LazyLoading extends LazyLoadingDisabled ? EagerCategoryBusiness : LazyCategoryBusiness

export declare const CategoryBusiness: (new (init: ModelInit<CategoryBusiness>) => CategoryBusiness) & {
  copyOf(source: CategoryBusiness, mutator: (draft: MutableModel<CategoryBusiness>) => MutableModel<CategoryBusiness> | void): CategoryBusiness;
}