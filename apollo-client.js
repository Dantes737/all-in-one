import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: "https://countries.trevorblades.com" }),
  });
};

export default createApolloClient;
