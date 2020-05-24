import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks"
import Top from './pages/Top';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <Router>
            <Route exact path='/' component={Top}/>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
