import { TOGGLE_EMAIL_OAUTH } from "../action/index";

const emailAuthReducer = (state = false, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TOGGLE_EMAIL_OAUTH:
      return !state;
  }
  return state;
};

export default emailAuthReducer;
