import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'https://wp.jugometal.co.rs/graphql',
  cache: new InMemoryCache(),
})

export default apolloClient
