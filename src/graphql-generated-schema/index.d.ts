export type Maybe<T> = T | null;

export interface ICreateUserInput {
  username: string;

  email: string;

  password: string;

  firstName: string;

  middleName: string;

  lastName: string;

  description?: Maybe<string>;

  gender?: Maybe<IGender>;
}

export interface IUpdateUserInput {
  id: string;

  firstName: string;

  middleName: string;

  lastName: string;

  description?: Maybe<string>;

  gender?: Maybe<IGender>;
}

import { Gender as IGender } from '../core/enums/gender.enum';

export type IGenderValueMap = {
  MALE: IGender;
  FEMALE: IGender;
};

export type DateTime = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

export interface IMutationResponse {
  success: boolean;

  message: string;
}

// ====================================================
// Types
// ====================================================

export interface IQuery {
  _dummy?: Maybe<string>;

  _serverTime?: Maybe<DateTime>;

  user?: Maybe<IUser>;
}

export interface IUser {
  id?: Maybe<string>;

  username?: Maybe<string>;

  email?: Maybe<string>;

  firstName?: Maybe<string>;

  middleName?: Maybe<string>;

  lastName?: Maybe<string>;

  fullName?: Maybe<string>;

  description?: Maybe<string>;

  gender?: Maybe<IGender>;

  createdAt?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
}

export interface IMutation {
  _dummy?: Maybe<string>;

  createUser?: Maybe<ICreateUserMutationResponse>;

  updateUser?: Maybe<IUpdateUserMutationResponse>;

  deleteUser?: Maybe<IDeleteUserMutationResponse>;
}

export interface ICreateUserMutationResponse extends IMutationResponse {
  user?: Maybe<IUser>;

  success: boolean;

  message: string;
}

export interface IUpdateUserMutationResponse extends IMutationResponse {
  user?: Maybe<IUser>;

  success: boolean;

  message: string;
}

export interface IDeleteUserMutationResponse extends IMutationResponse {
  user?: Maybe<IUser>;

  success: boolean;

  message: string;
}

// ====================================================
// Arguments
// ====================================================

export interface IUserQueryArgs {
  id: string;
}
export interface ICreateUserMutationArgs {
  input: ICreateUserInput;
}
export interface IUpdateUserMutationArgs {
  input: IUpdateUserInput;
}
export interface IDeleteUserMutationArgs {
  id: string;
}

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

import { IGraphQLContext } from '../utils/graphql/interfaces/IGraphQLContext';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = {}> {
    _dummy?: _DummyResolver<Maybe<string>, TypeParent, Context>;

    _serverTime?: _ServerTimeResolver<Maybe<DateTime>, TypeParent, Context>;

    user?: UserResolver<Maybe<IUser>, TypeParent, Context>;
  }

  export type _DummyResolver<R = Maybe<string>, Parent = {}, Context = IGraphQLContext> = Resolver<R, Parent, Context>;
  export type _ServerTimeResolver<R = Maybe<DateTime>, Parent = {}, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<R = Maybe<IUser>, Parent = {}, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context,
    UserArgs
  >;
  export interface UserArgs {
    id: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = IUser> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    username?: UsernameResolver<Maybe<string>, TypeParent, Context>;

    email?: EmailResolver<Maybe<string>, TypeParent, Context>;

    firstName?: FirstNameResolver<Maybe<string>, TypeParent, Context>;

    middleName?: MiddleNameResolver<Maybe<string>, TypeParent, Context>;

    lastName?: LastNameResolver<Maybe<string>, TypeParent, Context>;

    fullName?: FullNameResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    gender?: GenderResolver<Maybe<IGender>, TypeParent, Context>;

    createdAt?: CreatedAtResolver<Maybe<DateTime>, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<Maybe<DateTime>, TypeParent, Context>;
  }

  export type IdResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<R, Parent, Context>;
  export type UsernameResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MiddleNameResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LastNameResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FullNameResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type DescriptionResolver<R = Maybe<string>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type GenderResolver<R = Maybe<IGender>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedAtResolver<R = Maybe<DateTime>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<R = Maybe<DateTime>, Parent = IUser, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = {}> {
    _dummy?: _DummyResolver<Maybe<string>, TypeParent, Context>;

    createUser?: CreateUserResolver<Maybe<ICreateUserMutationResponse>, TypeParent, Context>;

    updateUser?: UpdateUserResolver<Maybe<IUpdateUserMutationResponse>, TypeParent, Context>;

    deleteUser?: DeleteUserResolver<Maybe<IDeleteUserMutationResponse>, TypeParent, Context>;
  }

  export type _DummyResolver<R = Maybe<string>, Parent = {}, Context = IGraphQLContext> = Resolver<R, Parent, Context>;
  export type CreateUserResolver<
    R = Maybe<ICreateUserMutationResponse>,
    Parent = {},
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context, CreateUserArgs>;
  export interface CreateUserArgs {
    input: ICreateUserInput;
  }

  export type UpdateUserResolver<
    R = Maybe<IUpdateUserMutationResponse>,
    Parent = {},
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context, UpdateUserArgs>;
  export interface UpdateUserArgs {
    input: IUpdateUserInput;
  }

  export type DeleteUserResolver<
    R = Maybe<IDeleteUserMutationResponse>,
    Parent = {},
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context, DeleteUserArgs>;
  export interface DeleteUserArgs {
    id: string;
  }
}

export namespace CreateUserMutationResponseResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = ICreateUserMutationResponse> {
    user?: UserResolver<Maybe<IUser>, TypeParent, Context>;

    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type UserResolver<
    R = Maybe<IUser>,
    Parent = ICreateUserMutationResponse,
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = ICreateUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<R = string, Parent = ICreateUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace UpdateUserMutationResponseResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = IUpdateUserMutationResponse> {
    user?: UserResolver<Maybe<IUser>, TypeParent, Context>;

    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type UserResolver<
    R = Maybe<IUser>,
    Parent = IUpdateUserMutationResponse,
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = IUpdateUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<R = string, Parent = IUpdateUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace DeleteUserMutationResponseResolvers {
  export interface Resolvers<Context = IGraphQLContext, TypeParent = IDeleteUserMutationResponse> {
    user?: UserResolver<Maybe<IUser>, TypeParent, Context>;

    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type UserResolver<
    R = Maybe<IUser>,
    Parent = IDeleteUserMutationResponse,
    Context = IGraphQLContext
  > = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = IDeleteUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<R = string, Parent = IDeleteUserMutationResponse, Context = IGraphQLContext> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MutationResponseResolvers {
  export interface Resolvers {
    __resolveType: ResolveType;
  }
  export type ResolveType<
    R = 'CreateUserMutationResponse' | 'UpdateUserMutationResponse' | 'DeleteUserMutationResponse',
    Parent = ICreateUserMutationResponse | IUpdateUserMutationResponse | IDeleteUserMutationResponse,
    Context = IGraphQLContext
  > = TypeResolveFn<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, IGraphQLContext>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, IGraphQLContext>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, IGraphQLContext>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<DateTime, any> {
  name: 'DateTime';
}

export interface IResolvers<Context = IGraphQLContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  User?: UserResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  CreateUserMutationResponse?: CreateUserMutationResponseResolvers.Resolvers<Context>;
  UpdateUserMutationResponse?: UpdateUserMutationResponseResolvers.Resolvers<Context>;
  DeleteUserMutationResponse?: DeleteUserMutationResponseResolvers.Resolvers<Context>;
  MutationResponse?: MutationResponseResolvers.Resolvers<Context>;
  DateTime?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
