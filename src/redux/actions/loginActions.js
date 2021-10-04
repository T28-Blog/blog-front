export const LOG_IN = 'log in';
export const LOG_OUT = 'log out';

const logInActions = {
  userLogInAction: (state) => {
    return {
      type: LOG_IN,
      payload: {
        isLogged: true,
        user: state,
      },
    };
  },
  userLogOutAction: (state) => {
    return {
      type: LOG_OUT,
      payload: {
        isLogged: false,
        user: state,
      },
    };
  },
};

export default logInActions;
