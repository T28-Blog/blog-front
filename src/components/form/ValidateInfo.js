const checkUserName = (errors, userName) => {
  if (!userName.trim()) {
    errors.username = 'Username required';
  }
};

const checkUserEmail = (errors, userEmail) => {
  if (!userEmail) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
    errors.email = 'Email address is invalid';
  }
};

const checkUserPassword = (errors, userPassword) => {
  if (!userPassword) {
    errors.password = 'Password is required';
  } else if (userPassword.length < 6) {
    errors.password = 'Password needs to be 6 cahracters or more';
  }
};

const checkUserPasswordConfirm = (errors, userPassword, userPassword2) => {
  if (!userPassword2) {
    errors.password2 = 'Password is required';
  } else if (userPassword !== userPassword2) {
    errors.password2 = 'Password do not match';
  }
};

const validateInfo = {
  signUp: (values) => {
    const errors = {};
    const { username, email, password, password2 } = values;

    checkUserName(errors, username);
    checkUserEmail(errors, email);
    checkUserPassword(errors, password);
    checkUserPasswordConfirm(errors, password, password2);

    return errors;
  },
  signIn: (values) => {
    const errors = {};
    const { email, password } = values;

    checkUserEmail(errors, email);
    checkUserPassword(errors, password);

    return errors;
  },
};

export default validateInfo;
