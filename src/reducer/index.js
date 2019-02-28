import themeReducer from "./themeReducer";

const reducer = ({ theme }, action) => ({
  theme: themeReducer(theme, action)
});

export default reducer;
