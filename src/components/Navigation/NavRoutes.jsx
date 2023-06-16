import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Landing-Page/LandingPage";
import AuthForm from "../Authentication/AuthForm";
const LazyAboutPage = React.lazy(() => import("../About-Page/AboutPage"));
const LazyDashboard = React.lazy(() => import("../Dashboard/Dashboard"));
import AuthContext from "../../store/auth-context";
import NotFound from "../pageNotFound/NotFound";
import Login from "../LogIn-Page/Login";
import Signup from "../Signup-Page/Signup";
import UseAuth from "../Authentication/UseAuth";

export default function NavRoutes() {
  const authCtx = useContext(AuthContext);
  const user = UseAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback="Loading...">
            {authCtx.isLoggedIn && <LazyDashboard user={user} />}
            {!authCtx.isLoggedIn && <Navigate to='/login' />}
          </React.Suspense>
        }
      />
      <Route
        path="about"
        element={
          <React.Suspense fallback="Loading...">
            <LazyAboutPage />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
