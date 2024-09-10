import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-them" defaultTheme="dark">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
