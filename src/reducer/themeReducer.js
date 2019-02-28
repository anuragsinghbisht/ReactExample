import { CHANGE_THEME } from "../action/types";

const themeReducer = (theme, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return theme;
  }
};

export default themeReducer;
