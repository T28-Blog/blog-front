import { CHANGE_PROFILE, CHANGE_THUMBNAIL } from "../action/index";

const initialState = {
  profile: "",
  thumbnail: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      state = { ...state, profile: action.say };
      break;
    case CHANGE_THUMBNAIL:
      state = { ...state, thumbnail: action.thumbnail };
      break;
  }
  return state;
};

export default profileReducer;
