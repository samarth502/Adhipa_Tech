import { gql } from '@apollo/client';

export const CREATE_JOB_APPLICATION_MUTATION = gql`
  mutation ($file: Upload!, $createApplicationArgs: CreateApplicationArgs!) {
    createJobApplication(
      file: $file
      createApplicationArgs: $createApplicationArgs
    ) {
      name
      email
      experienceLevel
    }
  }
`;
