import React  from 'react';
import ReactDOM  from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, AppoloProvider } from '@apollo/client';
import GlobalStyle from '/components/GlobalStyle';


import Pages from './pages';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});
const App = () => {
    return (
      <ApolloProvider client={client}>
            <div>
                <GlobalStyle/>
               <Pages />
            </div>
      </ApolloProvider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));