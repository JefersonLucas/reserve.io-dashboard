import { useContext } from "react";

import { ThemeContext } from "contexts/Theme";
import { ThemeContextProps } from "contexts/Theme/types";

const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  return context;
};

export default useThemeContext;
