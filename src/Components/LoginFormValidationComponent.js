function LoginFormValidationComponent(loginValues) {
  const errors = {};
  const userDetails = JSON.parse(localStorage.getItem("machineTask"));
  if (!loginValues.email) {
    errors.email = "Email cannot be blank";
  } else if (loginValues.email !== userDetails.email) {
    errors.email = "Invalid Email";
  }
  if (!loginValues.password) {
    errors.password = "password cannot be blank";
  } else if (loginValues.password !== userDetails.password) {
    errors.password = "Invalid password";
  }
  return errors;
}

export default LoginFormValidationComponent;
