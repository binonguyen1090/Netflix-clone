import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {JumbotronContainer} from "./containers/jumbotron"
import {FooterContainer} from "./containers/footer"
import {AccordionContainer} from "./containers/accordion"
import * as ROUTES from "./constant/routes"

export default function App() {
  return (
    <Router>
      <Route exact path="/user">
        <p>Hello I am a user</p>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <AccordionContainer/>
        <FooterContainer />
      </Route>
    </Router>
  );
}

