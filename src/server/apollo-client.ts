import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const SERVER_ADDRESS =
  'http://ec2-13-201-129-251.ap-south-1.compute.amazonaws.com:3011/graphql';

const httpLink = createUploadLink({
  uri: SERVER_ADDRESS
});

const client = new ApolloClient({
  // uri: SERVER_ADDRESS,
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
