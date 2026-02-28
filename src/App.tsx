import { lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

export default function App() {
  return (
    <div style={{padding: 16}}>
      <nav style={{display: "flex", gap: 12, marginBottom: 16}}>
      <Link to = "/">Home</Link>
      <Link to = "/dashboard">Dashboard</Link>
      <Link to = "/settings">Settings</Link>
      <Link to = "/profile">Profile</Link>
      </nav>

    <ErrorBoundary fallback={<ErrorFallback/>}>
    <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
    </ErrorBoundary>
    </div>
  );
}