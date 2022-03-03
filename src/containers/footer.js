import React from "react";
import { Footer } from "../components";


export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>HELLO</Footer.Title>
      <Footer.Break/>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link>HELLO 1</Footer.Link>
          <Footer.Link>HELLO 2</Footer.Link>
          <Footer.Link>HELLO 3</Footer.Link>
          <Footer.Link>HELLO 4</Footer.Link>
          <Footer.Link>HELLO 5</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>HELLO 1</Footer.Link>
          <Footer.Link>HELLO 2</Footer.Link>
          <Footer.Link>HELLO 3</Footer.Link>
          <Footer.Link>HELLO 4</Footer.Link>
          <Footer.Link>HELLO 5</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>HELLO 1</Footer.Link>
          <Footer.Link>HELLO 2</Footer.Link>
          <Footer.Link>HELLO 3</Footer.Link>
          <Footer.Link>HELLO 4</Footer.Link>
          <Footer.Link>HELLO 5</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break/>
      <Footer.Text>HELLO 5</Footer.Text>

    </Footer>
  )
}

