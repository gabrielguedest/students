import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/apolloClient';

const client = apolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
