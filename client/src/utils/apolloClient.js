import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}