import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";

import { VisibilityProvider } from "./providers/visibility-provider.tsx";
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VisibilityProvider component="App">
      <RouterProvider router={router} />
    </VisibilityProvider>
  </StrictMode>
);
