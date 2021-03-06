import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './components/pages/Home';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/apolloClient';

const client = apolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
