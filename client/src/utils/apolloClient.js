import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URL
    }),
    cache: new InMemoryCache(),
  })
}