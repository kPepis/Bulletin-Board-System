import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateBoard {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Board {
  title: ID!
  description: String
  createdBy: User!
}

type BoardConnection {
  pageInfo: PageInfo!
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  description: String
  createdBy: UserCreateOneWithoutBoardsInput!
}

input BoardCreateManyWithoutCreatedByInput {
  create: [BoardCreateWithoutCreatedByInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateWithoutCreatedByInput {
  description: String
}

type BoardEdge {
  node: Board!
  cursor: String!
}

enum BoardOrderByInput {
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type BoardPreviousValues {
  title: ID!
  description: String
}

input BoardScalarWhereInput {
  title: ID
  title_not: ID
  title_in: [ID!]
  title_not_in: [ID!]
  title_lt: ID
  title_lte: ID
  title_gt: ID
  title_gte: ID
  title_contains: ID
  title_not_contains: ID
  title_starts_with: ID
  title_not_starts_with: ID
  title_ends_with: ID
  title_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BoardScalarWhereInput!]
  OR: [BoardScalarWhereInput!]
  NOT: [BoardScalarWhereInput!]
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
  AND: [BoardSubscriptionWhereInput!]
  OR: [BoardSubscriptionWhereInput!]
  NOT: [BoardSubscriptionWhereInput!]
}

input BoardUpdateInput {
  description: String
  createdBy: UserUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateManyDataInput {
  description: String
}

input BoardUpdateManyMutationInput {
  description: String
}

input BoardUpdateManyWithoutCreatedByInput {
  create: [BoardCreateWithoutCreatedByInput!]
  delete: [BoardWhereUniqueInput!]
  connect: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [BoardScalarWhereInput!]
  updateMany: [BoardUpdateManyWithWhereNestedInput!]
}

input BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput!
  data: BoardUpdateManyDataInput!
}

input BoardUpdateWithoutCreatedByDataInput {
  description: String
}

input BoardUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutCreatedByDataInput!
}

input BoardUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutCreatedByDataInput!
  create: BoardCreateWithoutCreatedByInput!
}

input BoardWhereInput {
  title: ID
  title_not: ID
  title_in: [ID!]
  title_not_in: [ID!]
  title_lt: ID
  title_lte: ID
  title_gt: ID
  title_gte: ID
  title_contains: ID
  title_not_contains: ID
  title_starts_with: ID
  title_not_starts_with: ID
  title_ends_with: ID
  title_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BoardWhereInput!]
  OR: [BoardWhereInput!]
  NOT: [BoardWhereInput!]
}

input BoardWhereUniqueInput {
  title: ID
}

scalar DateTime

scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  author: User!
  title: String!
  content: String!
  createdAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  author: UserCreateOneWithoutPostsInput!
  title: String!
  content: String!
  createdAt: DateTime!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  content: String!
  createdAt: DateTime!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  author: UserUpdateOneRequiredWithoutPostsInput
  title: String
  content: String
  createdAt: DateTime
}

input PostUpdateManyDataInput {
  title: String
  content: String
  createdAt: DateTime
}

input PostUpdateManyMutationInput {
  title: String
  content: String
  createdAt: DateTime
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  content: String
  createdAt: DateTime
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  userName: String!
  password: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  userName: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput
  boards: BoardCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBoardsInput {
  userName: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  userName: String!
  password: String!
  boards: BoardCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  userName_ASC
  userName_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  userName: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  userName: String
  password: String
  posts: PostUpdateManyWithoutAuthorInput
  boards: BoardUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  userName: String
  password: String
}

input UserUpdateOneRequiredWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  update: UserUpdateWithoutBoardsDataInput
  upsert: UserUpsertWithoutBoardsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBoardsDataInput {
  userName: String
  password: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  userName: String
  password: String
  boards: BoardUpdateManyWithoutCreatedByInput
}

input UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput!
  create: UserCreateWithoutBoardsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  userName: String
}

type Mutation {
  createBoard(data: BoardCreateInput!): Board!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateManyBoards(data: BoardUpdateManyMutationInput!, where: BoardWhereInput): BatchPayload!
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

type Query {
  board(where: BoardWhereUniqueInput!): Board
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
`

export type PostOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BoardOrderByInput = 
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'userName_ASC' |
  'userName_DESC' |
  'password_ASC' |
  'password_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface BoardWhereUniqueInput {
  title?: ID_Input
}

export interface PostWhereInput {
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
}

export interface BoardWhereInput {
  title?: ID_Input
  title_not?: ID_Input
  title_in?: ID_Input[] | ID_Input
  title_not_in?: ID_Input[] | ID_Input
  title_lt?: ID_Input
  title_lte?: ID_Input
  title_gt?: ID_Input
  title_gte?: ID_Input
  title_contains?: ID_Input
  title_not_contains?: ID_Input
  title_starts_with?: ID_Input
  title_not_starts_with?: ID_Input
  title_ends_with?: ID_Input
  title_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  AND?: BoardWhereInput[] | BoardWhereInput
  OR?: BoardWhereInput[] | BoardWhereInput
  NOT?: BoardWhereInput[] | BoardWhereInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  userName?: String
}

export interface UserWhereInput {
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  userName?: String
  userName_not?: String
  userName_in?: String[] | String
  userName_not_in?: String[] | String
  userName_lt?: String
  userName_lte?: String
  userName_gt?: String
  userName_gte?: String
  userName_contains?: String
  userName_not_contains?: String
  userName_starts_with?: String
  userName_not_starts_with?: String
  userName_ends_with?: String
  userName_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
}

export interface BoardCreateInput {
  description?: String
  createdBy: UserCreateOneWithoutBoardsInput
}

export interface UserCreateOneWithoutBoardsInput {
  create?: UserCreateWithoutBoardsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutBoardsInput {
  userName: String
  password: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface PostCreateWithoutAuthorInput {
  title: String
  content: String
  createdAt: DateTime
}

export interface BoardUpdateInput {
  description?: String
  createdBy?: UserUpdateOneRequiredWithoutBoardsInput
}

export interface UserUpdateOneRequiredWithoutBoardsInput {
  create?: UserCreateWithoutBoardsInput
  update?: UserUpdateWithoutBoardsDataInput
  upsert?: UserUpsertWithoutBoardsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutBoardsDataInput {
  userName?: String
  password?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput
  updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String
  content?: String
  createdAt?: DateTime
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostScalarWhereInput {
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  AND?: PostScalarWhereInput[] | PostScalarWhereInput
  OR?: PostScalarWhereInput[] | PostScalarWhereInput
  NOT?: PostScalarWhereInput[] | PostScalarWhereInput
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostUpdateManyDataInput {
  title?: String
  content?: String
  createdAt?: DateTime
}

export interface UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput
  create: UserCreateWithoutBoardsInput
}

export interface BoardUpdateManyMutationInput {
  description?: String
}

export interface PostCreateInput {
  author: UserCreateOneWithoutPostsInput
  title: String
  content: String
  createdAt: DateTime
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutPostsInput {
  userName: String
  password: String
  boards?: BoardCreateManyWithoutCreatedByInput
}

export interface BoardCreateManyWithoutCreatedByInput {
  create?: BoardCreateWithoutCreatedByInput[] | BoardCreateWithoutCreatedByInput
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput
}

export interface BoardCreateWithoutCreatedByInput {
  description?: String
}

export interface PostUpdateInput {
  author?: UserUpdateOneRequiredWithoutPostsInput
  title?: String
  content?: String
  createdAt?: DateTime
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutPostsDataInput {
  userName?: String
  password?: String
  boards?: BoardUpdateManyWithoutCreatedByInput
}

export interface BoardUpdateManyWithoutCreatedByInput {
  create?: BoardCreateWithoutCreatedByInput[] | BoardCreateWithoutCreatedByInput
  delete?: BoardWhereUniqueInput[] | BoardWhereUniqueInput
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput
  disconnect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput
  update?: BoardUpdateWithWhereUniqueWithoutCreatedByInput[] | BoardUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: BoardUpsertWithWhereUniqueWithoutCreatedByInput[] | BoardUpsertWithWhereUniqueWithoutCreatedByInput
  deleteMany?: BoardScalarWhereInput[] | BoardScalarWhereInput
  updateMany?: BoardUpdateManyWithWhereNestedInput[] | BoardUpdateManyWithWhereNestedInput
}

export interface BoardUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BoardWhereUniqueInput
  data: BoardUpdateWithoutCreatedByDataInput
}

export interface BoardUpdateWithoutCreatedByDataInput {
  description?: String
}

export interface BoardUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BoardWhereUniqueInput
  update: BoardUpdateWithoutCreatedByDataInput
  create: BoardCreateWithoutCreatedByInput
}

export interface BoardScalarWhereInput {
  title?: ID_Input
  title_not?: ID_Input
  title_in?: ID_Input[] | ID_Input
  title_not_in?: ID_Input[] | ID_Input
  title_lt?: ID_Input
  title_lte?: ID_Input
  title_gt?: ID_Input
  title_gte?: ID_Input
  title_contains?: ID_Input
  title_not_contains?: ID_Input
  title_starts_with?: ID_Input
  title_not_starts_with?: ID_Input
  title_ends_with?: ID_Input
  title_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  AND?: BoardScalarWhereInput[] | BoardScalarWhereInput
  OR?: BoardScalarWhereInput[] | BoardScalarWhereInput
  NOT?: BoardScalarWhereInput[] | BoardScalarWhereInput
}

export interface BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput
  data: BoardUpdateManyDataInput
}

export interface BoardUpdateManyDataInput {
  description?: String
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface PostUpdateManyMutationInput {
  title?: String
  content?: String
  createdAt?: DateTime
}

export interface UserCreateInput {
  userName: String
  password: String
  posts?: PostCreateManyWithoutAuthorInput
  boards?: BoardCreateManyWithoutCreatedByInput
}

export interface UserUpdateInput {
  userName?: String
  password?: String
  posts?: PostUpdateManyWithoutAuthorInput
  boards?: BoardUpdateManyWithoutCreatedByInput
}

export interface UserUpdateManyMutationInput {
  userName?: String
  password?: String
}

export interface BoardSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BoardWhereInput
  AND?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput
  OR?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput
  NOT?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
}

export interface Node {
  id: ID_Output
}

export interface Board {
  title: ID_Output
  description?: String
  createdBy: User
}

export interface User {
  id: ID_Output
  userName: String
  password: String
  posts?: Post[]
  boards?: Board[]
}

export interface Post {
  id: ID_Output
  author: User
  title: String
  content: String
  createdAt: DateTime
}

export interface BoardConnection {
  pageInfo: PageInfo
  edges: BoardEdge[]
  aggregate: AggregateBoard
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface BoardEdge {
  node: Board
  cursor: String
}

export interface AggregateBoard {
  count: Int
}

export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface PostEdge {
  node: Post
  cursor: String
}

export interface AggregatePost {
  count: Int
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface BoardSubscriptionPayload {
  mutation: MutationType
  node?: Board
  updatedFields?: String[]
  previousValues?: BoardPreviousValues
}

export interface BoardPreviousValues {
  title: ID_Output
  description?: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  content: String
  createdAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  userName: String
  password: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type Long = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  board: (args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Board | null>
  boards: (args: { where?: BoardWhereInput, orderBy?: BoardOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Board[]>
  boardsConnection: (args: { where?: BoardWhereInput, orderBy?: BoardOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<BoardConnection>
  post: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Post[]>
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostConnection>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createBoard: (args: { data: BoardCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Board>
  updateBoard: (args: { data: BoardUpdateInput, where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Board | null>
  updateManyBoards: (args: { data: BoardUpdateManyMutationInput, where?: BoardWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  upsertBoard: (args: { where: BoardWhereUniqueInput, create: BoardCreateInput, update: BoardUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Board>
  deleteBoard: (args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Board | null>
  deleteManyBoards: (args: { where?: BoardWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  createPost: (args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  updateManyPosts: (args: { data: PostUpdateManyMutationInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  deletePost: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  deleteManyPosts: (args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateManyUsers: (args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  board: (args: { where?: BoardSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<BoardSubscriptionPayload>>
  post: (args: { where?: PostSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Board: (where: BoardWhereInput): Promise<boolean> => super.existsDelegate('query', 'boards', { where }, {}, '{ id }'),
    Post: (where: PostWhereInput): Promise<boolean> => super.existsDelegate('query', 'posts', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    board: (args, info): Promise<Board | null> => super.delegate('query', 'board', args, {}, info),
    boards: (args, info): Promise<Board[]> => super.delegate('query', 'boards', args, {}, info),
    boardsConnection: (args, info): Promise<BoardConnection> => super.delegate('query', 'boardsConnection', args, {}, info),
    post: (args, info): Promise<Post | null> => super.delegate('query', 'post', args, {}, info),
    posts: (args, info): Promise<Post[]> => super.delegate('query', 'posts', args, {}, info),
    postsConnection: (args, info): Promise<PostConnection> => super.delegate('query', 'postsConnection', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createBoard: (args, info): Promise<Board> => super.delegate('mutation', 'createBoard', args, {}, info),
    updateBoard: (args, info): Promise<Board | null> => super.delegate('mutation', 'updateBoard', args, {}, info),
    updateManyBoards: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyBoards', args, {}, info),
    upsertBoard: (args, info): Promise<Board> => super.delegate('mutation', 'upsertBoard', args, {}, info),
    deleteBoard: (args, info): Promise<Board | null> => super.delegate('mutation', 'deleteBoard', args, {}, info),
    deleteManyBoards: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyBoards', args, {}, info),
    createPost: (args, info): Promise<Post> => super.delegate('mutation', 'createPost', args, {}, info),
    updatePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'updatePost', args, {}, info),
    updateManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPosts', args, {}, info),
    upsertPost: (args, info): Promise<Post> => super.delegate('mutation', 'upsertPost', args, {}, info),
    deletePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'deletePost', args, {}, info),
    deleteManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPosts', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    board: (args, infoOrQuery): Promise<AsyncIterator<BoardSubscriptionPayload>> => super.delegateSubscription('board', args, {}, infoOrQuery),
    post: (args, infoOrQuery): Promise<AsyncIterator<PostSubscriptionPayload>> => super.delegateSubscription('post', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}