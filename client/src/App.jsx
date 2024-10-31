import { React, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
