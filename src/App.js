import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetContinents from "./Components/GetContinents";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors?.forEach(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([errorLink, new HttpLink({ uri: "https://countries.trevorblades.com" })])
// const link = from([errorLink, new HttpLink({ uri: "http://localhost:6969/graphql" })])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GetContinents />
    </ApolloProvider>
  );
}

export default App;
