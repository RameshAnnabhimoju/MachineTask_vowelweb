import { useState } from "react";
import { Card, Button, Stack, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginFormValidationComponent from "./LoginFormValidationComponent";

function LoginComponent() {
  const navigate = useNavigate();
  const InitialLoginValues = {
    email: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(InitialLoginValues);
  const [errors, setErrors] = useState({});
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = LoginFormValidationComponent(loginValues);
    if (JSON.stringify(newErrors) === "{}") {
      const userDetails = JSON.parse(localStorage.getItem("machineTask"));
      sessionStorage.setItem("machineTask_login", JSON.stringify(userDetails));
      navigate("/home");
    }
    setErrors(newErrors);
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <Card.Header as="h3" className="text-bg-primary text-center">
          Login
        </Card.Header>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={loginValues.email}
                onChange={changeHandler}
                isInvalid={!!errors.email}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={loginValues.password}
                onChange={changeHandler}
                isInvalid={!!errors.password}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Floating>
            <br />
            <Stack direction="horizontal text-center" gap={3}>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register Now
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginComponent;
