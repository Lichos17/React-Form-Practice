import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AppContext } from "../context/appContext";

export const MainRouter = () => {
  const { isAuth } = useContext(AppContext);

  return (
    <Routes>
      {isAuth ? (
        <Route path="/*" element={<h1>Autenticado</h1>} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/register" />} />
    </Routes>
  );
};
