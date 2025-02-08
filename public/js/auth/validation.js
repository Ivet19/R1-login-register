export const isValidUsername = (username) => {
  let isValid;
  const minimumUsernameLength = 5;
  isValid = username.length >= minimumUsernameLengt;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;
  const minimumPasswordLength = 8;

  isValid =
    password.length >= minimumPasswordLength &&
    /\d/.test(password) &&
    /[A-ZÀÈÌÒÙÁÉÍÓÚÑ]/.test(password);

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;
  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;
  const minimumAdultAge = 18;
  isAdult = age >= minimumAdultAge;

  return isAdult;
};
