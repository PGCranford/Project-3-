import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  query workouts {
    _id
    workoutText
    createdAt
    # commentCount
    # comments{
    #     _id
    #     createdAt
    #     username
    #     commentBody
    # }
  }
`;

export const QUERY_WORKOUT = gql`
  query workout($id: ID!) {
    workouts(_id: $id) {
      _id
      workoutText
      createdAt
      username
      # commentCount
      # comments{
      #     _id
      #     createdAt
      #     username
      #     commentBody
      # }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
