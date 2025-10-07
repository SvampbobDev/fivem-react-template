import { createHashRouter } from "react-router";
import HomePage from "./pages/home";
import DefaultLayout from "./layouts/default";
import { debugNui } from "./lib/debugNui";
debugNui([
  {
    data: true,
    action: "setVisibleApp",
  },
]);
export const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
