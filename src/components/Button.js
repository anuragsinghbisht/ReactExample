import React from "react";
import { getState } from "../state";
import { changeTheme } from "../action";

const Button = () => {
  const [{ theme }, dispatch] = getState();

  return (
    <button
      style={{ backgroundColor: theme.primary }}
      onClick={() => dispatch(changeTheme("blue"))}
    >
      Change color to blue
    </button>
  );
};

export default Button;
