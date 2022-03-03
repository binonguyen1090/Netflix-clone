import React from "react";
import {JumbotronContainer} from "./containers/jumbotron"
import {FooterContainer} from "./containers/footer"
import {AccordionContainer} from "./containers/accordion"


export default function App() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer/>
      <FooterContainer />
    </>
  );
}

