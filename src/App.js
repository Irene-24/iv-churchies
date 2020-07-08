import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";


function App ()
{
  return (
    <Router>

      <NavBar />
      <Switch>

        <Route path="/resources" render={ () => <h1 style={ { marginTop: "var(--navHeight)" } }>Main</h1> } />

        <Route path="/about" render={ () => <h1 style={ { marginTop: "var(--navHeight)" } }> Footer</h1> } />

        <Route path="/" render={ () => <h1 style={ { marginTop: "var(--navHeight)" } }> Footer</h1> } />

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
