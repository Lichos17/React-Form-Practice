import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import AppContext from "../context/appContext";

const MainRouter = () => {
  const { isAuth } = useContext(AppContext);

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route
            path="/"
            element={<h1 className="home-title">Autenticado</h1>}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/register" />} />
    </Routes>
  );
};
export default MainRouter;
