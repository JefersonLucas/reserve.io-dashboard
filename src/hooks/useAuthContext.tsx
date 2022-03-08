import { useContext } from "react";

import { AuthContextProps } from "@types";

import { AuthContext } from "contexts/Auth";

function useAuthContext(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export default useAuthContext;
