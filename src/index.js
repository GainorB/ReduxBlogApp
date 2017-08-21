import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

// components
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

// React Router
  // no longer making a request to a web server to render a new page
  // intercepts changes to the URL, stops the user, manually looks at the URL then renders the correct components (views)
  // History library parses the changed URL to React Router
  // SPA (single page apps): no longer navigating between distinct HTML documents, we're also dealing with a single HTML page then relying on JS to change components on the page that change views

// BrowserRouter interacts with history library decides what to do based on change inside the URL
// Route provides configuration to react router that decides what component to render when the URL changes
  // path: string, if the user goes to this route I want to show this component
  // component

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// "exact" in Route
  // React loosely matches the forward slash in the root route
  // "exact" keyword tells the Router to EXACTLY match the specified route "eact path="/""

// Switch takes in a collection of routes
  // put the most specific route at the top of the list

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
