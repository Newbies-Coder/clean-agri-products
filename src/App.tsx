import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "@/components/ui/toaster";
import Loading from "./components/layout/Loading";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>{element}</Suspense>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
