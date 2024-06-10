import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/Root";
import SupportTicket from "./pages/SupportTicket";
import Tickets from "./pages/Tickets";
import { AuthProvider } from "./auth/AuthContext";
import SettingsMenu from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/inbox",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "inbox/ticket/:id", element: <SupportTicket /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/tickets",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/tickets", element: <Tickets /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/settings",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/settings", element: <SettingsMenu /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
