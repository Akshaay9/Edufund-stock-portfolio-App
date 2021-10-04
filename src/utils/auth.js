//  rejex
export const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const passwordRejex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

// email
export const emailValidator = (email) => {
  return !emailRegex.test(email);
};
// passowrd
export const passowrdValidator = (pass) => {
  if (pass.search(/[A-Z]/) < 0) {
    return true;
  }
  return !passwordRejex.test(pass);
};

export const firstNameVlidator = (firstName) => {
  if (firstName === "" || firstName.length < 4) {
    return true;
  }
};
export const lastNameValidator = (lasName) => {
  if (lasName === "") {
    return true;
  }
};

export const genderValidator = (gender) => {
  return gender === "" || gender === "default";
};

export const authValidator = (password) => {
  let special = /[\W]{1,}/;
  if (password.length === 0) {
    return "required";
  } else if (password.length < 5) {
    return "passowrd should contain min 6 char";
  } else if (password.search(/[A-Z]/) < 0) {
    return "password should contain one UpperCase";
  } else if (password.search(/[a-z]/) < 0) {
    return "password should contain one LowerCase";
  } else if (password.search(/[0-9]/) < 0) {
    return "password should contain one number";
  } else if (!special.test(password)) {
    return "password should contain one special char";
  } else {
    return "success";
  }
};

export const emailError = (email) => {
  if (email === "") {
    return "required";
  } else if (emailValidator(email)) {
    return "not an valid email";
  } else {
    return "success";
  }
};

export const firstNameError = (firstName) => {
  if (firstName === "") {
    return "required";
  } else if (firstName.length < 4) {
    return "length of 4";
  } else return "success";
};
export const lastNameError = (lastName) => {
  if (lastName === "") {
    return "required";
  } else return "success";
};

export const checkFormErrorSignUp = (
  firstName,
  lastName,
  gender,
  dob,
  email,
  pass
) => {
  if (
    !firstNameVlidator(firstName) &&
    !lastNameValidator(lastName) &&
    !genderValidator(gender) &&
    dob !== "" &&
    !emailValidator(email) &&
    !passowrdValidator(pass)
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkErrorForLogin = (email, pass) => {
  if (!emailValidator(email) && !passowrdValidator(pass)) {
    return true;
  } else {
    return false;
  }
};

export const checkForProfileData = (
  firstName,
  lastName,
  gender,
  dob,
  email
) => {
  if (
    !firstNameVlidator(firstName) &&
    !lastNameValidator(lastName) &&
    !genderValidator(gender) &&
    dob !== "" &&
    !emailValidator(email)
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkForPass = (pass) => {
  if (!passowrdValidator(pass)) {
    return true;
  } else {
    return false;
  }
};
