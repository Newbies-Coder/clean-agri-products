import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    </HelmetProvider>
  );
};

export default App;
