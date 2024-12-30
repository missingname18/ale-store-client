import { createBrowserRouter } from "react-router";
import NotFoundPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
    errorElement : <NotFoundPage />,
  },
]);

export default router;