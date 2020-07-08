import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";


function App ()
{
  return (
    <Router>

      <NavBar />
      <Switch>

        <Route path="/about" render={ () => <h1 style={ { marginTop: "var(--navHeight)" } }> Footer</h1> } />

        <Route path="/" component={ Home } />

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
