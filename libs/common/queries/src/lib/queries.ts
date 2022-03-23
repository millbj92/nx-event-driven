import { gql } from '@apollo/client';

//Post queries
export const ALL_POSTS_BY_USER = gql`
  query AllPostsByUser {
    users {
      id
      name
      email
      posts {
        content
      }
    }
  }
`;

export const ALL_POSTS = gql`
query Posts($where: PostWhereInput!) {
  posts(where: $where) {
  authorId,
  content,
  createdAt,
  published
  files {
    path
  }  
  }
}
`;

//User Queries
export const ALL_USERS = gql`
  query Users {
    users {
      name
      email
      posts {
        content
      }
    }
  }
`;

export const FIND_USER_BY_ID = gql`
  query FindById($email: String!, $userId: ID!) {
    user(id: $userId) {
      name
      email
      posts {
        content
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query UserProfile($meId: ID!) {
    me(id: $meId) {
      name
      email
      posts {
        content
      }
    }
  }
`;

export const FIND_USER_BY_ENAIL = gql`
  query FindByEmail($email: String!) {
    findByEmail(email: $email) {
      id
      name
      email
      posts {
        content
      }
    }
  }
`;

//Mutations
export const USER_LOGIN = gql`
  mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput)
  }
`;

export const USER_REGISTER = gql`
  mutation Register($createUserInput: CreateUserInput!) {
    register(createUserInput: $createUserInput)
  }
`;
