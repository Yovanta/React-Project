import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://task-prak-graphql.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "qWoylsMyuF0gdqA1qz0u0KazKKSCH5OwIGTLStL53iiRqV44WM1KsHdCEUisduFY",
  },
});

export default client;
