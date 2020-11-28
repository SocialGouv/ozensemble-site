import React from "react"
import { Alert } from "react-bootstrap"
import styled from "styled-components"

const Kpi = ({ text, value }) => (
  <Wrapper>
    <Alert variant="secondary">
      <Alert.Heading>{value}</Alert.Heading>
      <div>{text}</div>
    </Alert>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1 0 50%;

  .alert {
    border: none;
    padding: 2rem;
    margin: 0.5rem;
    background-color: #f3f3f3;

    .alert-heading {
      color: var(--primary);
    }
  }
`

export default Kpi
