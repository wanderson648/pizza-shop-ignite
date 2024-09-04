import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

import "./index.css";

export function App() {
  return (
    <>
      <Toaster richColors/>
      <RouterProvider router={router} />
    </>
  );
}
