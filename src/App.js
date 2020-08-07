import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Material-ui
import CssBaseLine from "@material-ui/core/CssBaseline";

//components
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import AddBook from "./components/AddBook";
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <Router>
      <CssBaseLine />
      <BookContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Library} />
          <Route path="/addbook" component={AddBook} />
        </Switch>
      </BookContextProvider>
    </Router>
  );
}

export default App;
