import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/Root";
import SupportTicket from "./pages/SupportTicket";

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
      { path: "*", element: <ErrorPage /> },
      { path: "inbox/ticket/:id", element: <SupportTicket /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
