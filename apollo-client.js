import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: "https://countries.trevorblades.com",
  });
};

export default createApolloClient;
