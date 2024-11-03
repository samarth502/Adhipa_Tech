import { DocumentNode } from '@apollo/client';
import client from './apollo-client';

export async function executeMutation<T>(
  mutation: DocumentNode,
  variables: Record<string, unknown>
): Promise<T> {
  try {
    const result = await client.mutate({
      mutation: mutation,
      variables: variables
    });

    return result.data;
  } catch (error) {
    console.error('GraphQL Mutation Error:', error);
    throw error;
  }
}
