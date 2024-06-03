"use client";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
