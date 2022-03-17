import { useContext } from "react";

import { AuthContext } from "contexts/Auth";
import { AuthContextProps } from "contexts/Auth/types";

function useAuthContext(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export default useAuthContext;
