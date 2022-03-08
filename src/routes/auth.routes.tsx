import { Routes, Route } from "react-router-dom";

import SignIn from "pages/SignIn";
import Error from "pages/Error";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
