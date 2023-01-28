import { useState } from "react";
import { Card, Button, Stack, Form } from "react-bootstrap";

function LoginComponent() {
  const InitialLoginValues = {
    email: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(InitialLoginValues);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };
  return (
    <div
      class="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <Card.Header as="h3" className="text-bg-primary text-center">
          Login
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                value={loginValues.email}
                onChange={changeHandler}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type="invalid">
                Valid Email Required
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={loginValues.password}
                onChange={changeHandler}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type="invalid">
                Valid Password Required
              </Form.Control.Feedback>
            </Form.Floating>
            <br />
            <Stack direction="horizontal text-center" gap={3}>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button variant="primary">Signup</Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginComponent;
