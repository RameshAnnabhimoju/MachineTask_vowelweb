function RegisterFormValidationComponent(values) {
  const errors = {};
  const emailRegex =
    /^([a-z 0-9 . -]+)@([a-z 0-9 -]+).([a-z]{2,6})(.[a-z]{2,6})?$/i;
  const passwordUpperRegex = /[A-Z]/;
  const passwordLowerRegex = /[a-z]/;
  const passwordNumberRegex = /[0-9]/;
  const passwordSymbolRegex = /[^a-zA-Z0-9]/;
  if (!values.name) {
    errors.name = "Name is required!";
  } else if (values.name.length < 4) {
    errors.name = "Name should have minimum 4 characters";
  }
  if (!values.dob) {
    errors.dob = "Date of Birth is required!";
  }
  if (!values.gender) {
    errors.gender = "Gender is required!";
  }
  if (!values.city) {
    errors.city = "City is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid Email!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (
    !passwordUpperRegex.test(values.password) ||
    !passwordLowerRegex.test(values.password) ||
    !passwordNumberRegex.test(values.password) ||
    !passwordSymbolRegex.test(values.password) ||
    values.password.length < 6
  ) {
    errors.password = "Password should have atleast ";
    if (values.password.length < 6) {
      errors.password += "6 characters ";
    }
    if (!passwordUpperRegex.test(values.password)) {
      errors.password += "one upper case letter ";
    }
    if (!passwordLowerRegex.test(values.password)) {
      errors.password += "one lower case letter ";
    }
    if (!passwordSymbolRegex.test(values.password)) {
      errors.password += "one symbol ";
    }
    if (!passwordNumberRegex.test(values.password)) {
      errors.password += "one Number ";
    }
  }
  if (!values.confirmPassword || values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!values.declaration) {
    errors.declaration = "Please Accept the Terms of Use & Privacy Policy";
  }

  return errors;
}

export default RegisterFormValidationComponent;
