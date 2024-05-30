import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import Provider from "./Provider/Provider.jsx";
import { Toaster } from "react-hot-toast";
import { router } from "./Routes/Routes.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Provider>
          <RouterProvider router={router}> </RouterProvider>
          <Toaster position="top-right" reverseOrder={false} />
        </Provider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
