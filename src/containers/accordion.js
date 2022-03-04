import React from "react";
import faqsData from "../fixtures/faqs.json"
import { Accordion } from "../components";
import { OptForm } from "../components";


export function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>

    </Accordion>
  )
}
