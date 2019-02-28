import { CHANGE_THEME } from "./types";

export const changeTheme = color => ({
  type: CHANGE_THEME,
  payload: {
    primary: color
  }
});
