import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomepageComponent() {
  const navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage.getItem("machineTask_login"));
  const logoutHandler = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Machine Task</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-5 d-flex justify-content-center">
        <Card style={{ width: "50wh" }}>
          <Card.Header as="h4">Account Details</Card.Header>
          <Card.Body>
            <InputGroup>
              <InputGroup.Text style={{ width: "110px" }}>
                Name:{" "}
              </InputGroup.Text>
              <Form.Control readOnly value={userDetails.name}></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text style={{ width: "110px" }}>
                Date of Birth:{" "}
              </InputGroup.Text>
              <Form.Control readOnly value={userDetails.dob}></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text style={{ width: "110px" }}>
                Gender:{" "}
              </InputGroup.Text>
              <Form.Control readOnly value={userDetails.gender}></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text style={{ width: "110px" }}>
                City:{" "}
              </InputGroup.Text>
              <Form.Control readOnly value={userDetails.city}></Form.Control>
            </InputGroup>
            <InputGroup>
              <InputGroup.Text style={{ width: "110px" }}>
                Email:{" "}
              </InputGroup.Text>
              <Form.Control readOnly value={userDetails.email}></Form.Control>
            </InputGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default HomepageComponent;
