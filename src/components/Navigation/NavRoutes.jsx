import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Landing-Page/LandingPage";
import AuthForm from "../Authentication/AuthForm";
const LazyAboutPage = React.lazy(() => import("../About-Page/AboutPage"));
const LazyDashboard = React.lazy(() => import("../Dashboard/Dashboard"));

export default function NavRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<AuthForm />} />
      <Route path="/login" element={<AuthForm />} />
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback="Loading...">
            <LazyDashboard />
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
    </Routes>
  );
}
