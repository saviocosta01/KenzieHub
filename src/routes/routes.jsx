import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";

export const LandingPages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};