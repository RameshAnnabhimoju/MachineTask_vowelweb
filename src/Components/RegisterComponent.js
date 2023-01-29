import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import RegisterFormValidationComponent from "./RegisterFormValidationComponent";
function RegisterComponent() {
  const [registerValues, setRegisterValues] = useState({
    name: "",
    dob: "",
    gender: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
    declaration: "",
    verified: false,
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(RegisterFormValidationComponent(registerValues));
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "30vw" }}>
        <Card.Header as={"h3"} className="text-bg-success text-center">
          Register
        </Card.Header>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                name="name"
                type="text"
                placeholder="Name"
                value={registerValues.name}
                onChange={changeHandler}
                isInvalid={errors.name}
              />
              <Form.Label>Name</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                name="dob"
                type="date"
                placeholder="dob"
                value={registerValues.dob}
                onChange={changeHandler}
                isInvalid={errors.dob}
              />
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Floating>
            <div className="gender mb-3">
              <Form.Check
                inline
                label="Male"
                name="gender"
                type="radio"
                value="Male"
                onChange={changeHandler}
                isInvalid={errors.gender?.length}
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type="radio"
                value="Female"
                onChange={changeHandler}
                isInvalid={errors.gender?.length}
              />
              <Form.Check
                inline
                label="Others"
                name="gender"
                type="radio"
                value="Others"
                onChange={changeHandler}
                isInvalid={errors.gender?.length}
              />
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </div>
            <Form.Select
              className="mb-3"
              name="city"
              onChange={changeHandler}
              isInvalid={errors.city?.length}
            >
              <option value="">City</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
            <Form.Floating className="mb-3">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                value={registerValues.email}
                onChange={changeHandler}
                isInvalid={errors.email?.length}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={registerValues.password}
                onChange={changeHandler}
                isInvalid={errors.password?.length}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={registerValues.confirmPassword}
                onChange={changeHandler}
                isInvalid={errors.confirmPassword?.length}
              />
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Floating>
            <Form.Check
              label="I Accept Term of Use & Privacy Policy"
              name="declaration"
              type="checkbox"
              value={registerValues.declaration}
              onChange={changeHandler}
              isInvalid={errors.declaration?.length}
            />
            <Form.Control.Feedback type="invalid">
              {errors.declaration}
            </Form.Control.Feedback>
            <br />
            <Button
              variant="success"
              type="submit"
              className="d-block text-center w-100"
            >
              Register Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterComponent;
