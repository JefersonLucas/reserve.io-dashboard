import { Routes, Route } from "react-router-dom";

import Layout from "components/Layout";

import Dashboard from "pages/Dashboard";
import Register from "pages/Register";
import Reservations from "pages/Reservations";
import Error from "pages/Error";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} caseSensitive />
        <Route path="/register" element={<Register />} caseSensitive />
        <Route path="/reservations" element={<Reservations />} caseSensitive />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
