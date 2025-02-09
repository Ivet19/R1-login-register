export const isValidUsername = (username) => {
  let isValid;

  isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  isValid =
    password.length >= 8 &&
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

  isAdult = age >= 18;

  return isAdult;
};
