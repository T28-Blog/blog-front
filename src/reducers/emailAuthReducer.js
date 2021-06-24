import { CHECK_EMAIL_AUTH } from "../action/index";

const emailAuthReducer = (state = {isLoginCheck: false}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHECK_EMAIL_AUTH:
      state = { ...state, isLoginCheck: true}
  }
  return state;
};

export default emailAuthReducer;
