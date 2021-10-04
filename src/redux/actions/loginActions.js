export const LOG_IN = 'log in';
export const LOG_OUT = 'log out';

const logInActions = {
  userLogInAction: (state) => {
    return {
      type: LOG_IN,
      payload: { ...state },
    };
  },
  userLogOutAction: (state) => {
    return {
      type: LOG_OUT,
      payload: { ...state },
    };
  },
};

export default logInActions;
