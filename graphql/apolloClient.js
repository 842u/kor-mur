import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.SANITY_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apolloClient;
