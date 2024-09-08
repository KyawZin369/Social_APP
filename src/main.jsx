import React from "react";
import ReactDOM from "react-dom/client";

import ThemedApp from "./ThemedApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Login from "./Page/Login.jsx";
import App from "./App.jsx";
import Register from "./Page/Register.jsx";
import Profile from "./Page/Profile.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Post from "./Page/Post.jsx";

import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemedApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
