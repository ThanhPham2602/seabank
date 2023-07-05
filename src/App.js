import "./App.css";

import IndexLogin from "./pages/Login/index.jsx";
import Layout from "./pages/Dashboard/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MyDefault } from "./pages/Dashboard/_defaultProps";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <IndexLogin />,
    },
    {
      path: "/system",
      element: <Layout />,
      children: MyDefault.route.routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
