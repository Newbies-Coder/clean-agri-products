import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "@/components/ui/toaster"
import Loading from "./components/layout/Loading";

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>{element}</Suspense>
      <Toaster />
    </HelmetProvider>
  );
};

export default App;
